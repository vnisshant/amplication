import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InstanceResolverBase } from "./base/instance.resolver.base";
import { Instance } from "./base/Instance";
import { InstanceService } from "./instance.service";

@graphql.Resolver(() => Instance)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InstanceResolver extends InstanceResolverBase {
  constructor(
    protected readonly service: InstanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
