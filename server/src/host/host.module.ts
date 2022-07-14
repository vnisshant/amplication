import { Module } from "@nestjs/common";
import { HostModuleBase } from "./base/host.module.base";
import { HostService } from "./host.service";
import { HostController } from "./host.controller";
import { HostResolver } from "./host.resolver";

@Module({
  imports: [HostModuleBase],
  controllers: [HostController],
  providers: [HostService, HostResolver],
  exports: [HostService],
})
export class HostModule {}
