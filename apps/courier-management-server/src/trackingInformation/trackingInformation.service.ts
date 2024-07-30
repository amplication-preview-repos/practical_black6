import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrackingInformationServiceBase } from "./base/trackingInformation.service.base";

@Injectable()
export class TrackingInformationService extends TrackingInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
