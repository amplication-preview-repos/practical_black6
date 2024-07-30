import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsignmentServiceBase } from "./base/consignment.service.base";

@Injectable()
export class ConsignmentService extends ConsignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
