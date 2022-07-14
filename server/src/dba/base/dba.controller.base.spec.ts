import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { DbaController } from "../dba.controller";
import { DbaService } from "../dba.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  Department: new Date(),
  id: "exampleId",
  name: new Date(),
};
const CREATE_RESULT = {
  Department: new Date(),
  id: "exampleId",
  name: new Date(),
};
const FIND_MANY_RESULT = [
  {
    Department: new Date(),
    id: "exampleId",
    name: new Date(),
  },
];
const FIND_ONE_RESULT = {
  Department: new Date(),
  id: "exampleId",
  name: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Dba", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DbaService,
          useValue: service,
        },
      ],
      controllers: [DbaController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /dbas", async () => {
    await request(app.getHttpServer())
      .post("/dbas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        Department: CREATE_RESULT.Department.toISOString(),
        name: CREATE_RESULT.name.toISOString(),
      });
  });

  test("GET /dbas", async () => {
    await request(app.getHttpServer())
      .get("/dbas")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          Department: FIND_MANY_RESULT[0].Department.toISOString(),
          name: FIND_MANY_RESULT[0].name.toISOString(),
        },
      ]);
  });

  test("GET /dbas/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dbas"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dbas/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dbas"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        Department: FIND_ONE_RESULT.Department.toISOString(),
        name: FIND_ONE_RESULT.name.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
