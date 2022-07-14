import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ServicesLinkedResolverBase } from "./base/servicesLinked.resolver.base";
import { ServicesLinked } from "./base/ServicesLinked";
import { ServicesLinkedService } from "./servicesLinked.service";

@graphql.Resolver(() => ServicesLinked)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ServicesLinkedResolver extends ServicesLinkedResolverBase {
  constructor(
    protected readonly service: ServicesLinkedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
