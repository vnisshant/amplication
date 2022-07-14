import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DatabaseResolverBase } from "./base/database.resolver.base";
import { Database } from "./base/Database";
import { DatabaseService } from "./database.service";

@graphql.Resolver(() => Database)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DatabaseResolver extends DatabaseResolverBase {
  constructor(
    protected readonly service: DatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
