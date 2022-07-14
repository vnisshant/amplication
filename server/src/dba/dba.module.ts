import { Module } from "@nestjs/common";
import { DbaModuleBase } from "./base/dba.module.base";
import { DbaService } from "./dba.service";
import { DbaController } from "./dba.controller";
import { DbaResolver } from "./dba.resolver";

@Module({
  imports: [DbaModuleBase],
  controllers: [DbaController],
  providers: [DbaService, DbaResolver],
  exports: [DbaService],
})
export class DbaModule {}
