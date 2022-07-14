import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServicesLinkedService } from "./servicesLinked.service";
import { ServicesLinkedControllerBase } from "./base/servicesLinked.controller.base";

@swagger.ApiTags("servicesLinkeds")
@common.Controller("servicesLinkeds")
export class ServicesLinkedController extends ServicesLinkedControllerBase {
  constructor(
    protected readonly service: ServicesLinkedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
