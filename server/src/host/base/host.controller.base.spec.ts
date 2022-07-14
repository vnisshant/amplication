import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { HostController } from "../host.controller";
import { HostService } from "../host.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationName: "exampleApplicationName",
  dba_dr: "exampleDbaDr",
  dba_primary: "exampleDbaPrimary",
  dba_secondary: "exampleDbaSecondary",
  Hostname: new Date(),
  id: "exampleId",
  service_linked: "exampleServiceLinked",
  UUID: new Date(),
};
const CREATE_RESULT = {
  applicationName: "exampleApplicationName",
  dba_dr: "exampleDbaDr",
  dba_primary: "exampleDbaPrimary",
  dba_secondary: "exampleDbaSecondary",
  Hostname: new Date(),
  id: "exampleId",
  service_linked: "exampleServiceLinked",
  UUID: new Date(),
};
const FIND_MANY_RESULT = [
  {
    applicationName: "exampleApplicationName",
    dba_dr: "exampleDbaDr",
    dba_primary: "exampleDbaPrimary",
    dba_secondary: "exampleDbaSecondary",
    Hostname: new Date(),
    id: "exampleId",
    service_linked: "exampleServiceLinked",
    UUID: new Date(),
  },
];
const FIND_ONE_RESULT = {
  applicationName: "exampleApplicationName",
  dba_dr: "exampleDbaDr",
  dba_primary: "exampleDbaPrimary",
  dba_secondary: "exampleDbaSecondary",
  Hostname: new Date(),
  id: "exampleId",
  service_linked: "exampleServiceLinked",
  UUID: new Date(),
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

describe("Host", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HostService,
          useValue: service,
        },
      ],
      controllers: [HostController],
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

  test("POST /hosts", async () => {
    await request(app.getHttpServer())
      .post("/hosts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        Hostname: CREATE_RESULT.Hostname.toISOString(),
        UUID: CREATE_RESULT.UUID.toISOString(),
      });
  });

  test("GET /hosts", async () => {
    await request(app.getHttpServer())
      .get("/hosts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          Hostname: FIND_MANY_RESULT[0].Hostname.toISOString(),
          UUID: FIND_MANY_RESULT[0].UUID.toISOString(),
        },
      ]);
  });

  test("GET /hosts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hosts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /hosts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hosts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        Hostname: FIND_ONE_RESULT.Hostname.toISOString(),
        UUID: FIND_ONE_RESULT.UUID.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
