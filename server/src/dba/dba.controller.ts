import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DbaService } from "./dba.service";
import { DbaControllerBase } from "./base/dba.controller.base";

@swagger.ApiTags("dbas")
@common.Controller("dbas")
export class DbaController extends DbaControllerBase {
  constructor(
    protected readonly service: DbaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
