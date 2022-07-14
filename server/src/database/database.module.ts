import { Module } from "@nestjs/common";
import { DatabaseModuleBase } from "./base/database.module.base";
import { DatabaseService } from "./database.service";
import { DatabaseController } from "./database.controller";
import { DatabaseResolver } from "./database.resolver";

@Module({
  imports: [DatabaseModuleBase],
  controllers: [DatabaseController],
  providers: [DatabaseService, DatabaseResolver],
  exports: [DatabaseService],
})
export class DatabaseModule {}
