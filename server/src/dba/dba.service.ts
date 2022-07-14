import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DbaServiceBase } from "./base/dba.service.base";

@Injectable()
export class DbaService extends DbaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
