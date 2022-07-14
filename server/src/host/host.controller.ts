import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HostService } from "./host.service";
import { HostControllerBase } from "./base/host.controller.base";

@swagger.ApiTags("hosts")
@common.Controller("hosts")
export class HostController extends HostControllerBase {
  constructor(
    protected readonly service: HostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
