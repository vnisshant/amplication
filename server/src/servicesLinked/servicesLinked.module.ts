import { Module } from "@nestjs/common";
import { ServicesLinkedModuleBase } from "./base/servicesLinked.module.base";
import { ServicesLinkedService } from "./servicesLinked.service";
import { ServicesLinkedController } from "./servicesLinked.controller";
import { ServicesLinkedResolver } from "./servicesLinked.resolver";

@Module({
  imports: [ServicesLinkedModuleBase],
  controllers: [ServicesLinkedController],
  providers: [ServicesLinkedService, ServicesLinkedResolver],
  exports: [ServicesLinkedService],
})
export class ServicesLinkedModule {}
