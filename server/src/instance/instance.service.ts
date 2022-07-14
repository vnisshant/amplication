import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InstanceServiceBase } from "./base/instance.service.base";

@Injectable()
export class InstanceService extends InstanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
