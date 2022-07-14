import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ServicesLinkedController } from "../servicesLinked.controller";
import { ServicesLinkedService } from "../servicesLinked.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  backupHost: "exampleBackupHost",
  drHost: "exampleDrHost",
  id: "exampleId",
  ip_address: new Date(),
  name: new Date(),
  primaryHost: "examplePrimaryHost",
  silo: "exampleSilo",
};
const CREATE_RESULT = {
  backupHost: "exampleBackupHost",
  drHost: "exampleDrHost",
  id: "exampleId",
  ip_address: new Date(),
  name: new Date(),
  primaryHost: "examplePrimaryHost",
  silo: "exampleSilo",
};
const FIND_MANY_RESULT = [
  {
    backupHost: "exampleBackupHost",
    drHost: "exampleDrHost",
    id: "exampleId",
    ip_address: new Date(),
    name: new Date(),
    primaryHost: "examplePrimaryHost",
    silo: "exampleSilo",
  },
];
const FIND_ONE_RESULT = {
  backupHost: "exampleBackupHost",
  drHost: "exampleDrHost",
  id: "exampleId",
  ip_address: new Date(),
  name: new Date(),
  primaryHost: "examplePrimaryHost",
  silo: "exampleSilo",
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

describe("ServicesLinked", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ServicesLinkedService,
          useValue: service,
        },
      ],
      controllers: [ServicesLinkedController],
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

  test("POST /servicesLinkeds", async () => {
    await request(app.getHttpServer())
      .post("/servicesLinkeds")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        ip_address: CREATE_RESULT.ip_address.toISOString(),
        name: CREATE_RESULT.name.toISOString(),
      });
  });

  test("GET /servicesLinkeds", async () => {
    await request(app.getHttpServer())
      .get("/servicesLinkeds")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          ip_address: FIND_MANY_RESULT[0].ip_address.toISOString(),
          name: FIND_MANY_RESULT[0].name.toISOString(),
        },
      ]);
  });

  test("GET /servicesLinkeds/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/servicesLinkeds"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /servicesLinkeds/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/servicesLinkeds"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        ip_address: FIND_ONE_RESULT.ip_address.toISOString(),
        name: FIND_ONE_RESULT.name.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
