import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstanceService } from "./instance.service";
import { InstanceControllerBase } from "./base/instance.controller.base";

@swagger.ApiTags("instances")
@common.Controller("instances")
export class InstanceController extends InstanceControllerBase {
  constructor(
    protected readonly service: InstanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
