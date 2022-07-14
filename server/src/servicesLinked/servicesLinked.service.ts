import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ServicesLinkedServiceBase } from "./base/servicesLinked.service.base";

@Injectable()
export class ServicesLinkedService extends ServicesLinkedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
