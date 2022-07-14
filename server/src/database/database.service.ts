import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DatabaseServiceBase } from "./base/database.service.base";

@Injectable()
export class DatabaseService extends DatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
