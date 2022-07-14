import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HostServiceBase } from "./base/host.service.base";

@Injectable()
export class HostService extends HostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
