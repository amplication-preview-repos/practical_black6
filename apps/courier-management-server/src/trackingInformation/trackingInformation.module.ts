import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrackingInformationModuleBase } from "./base/trackingInformation.module.base";
import { TrackingInformationService } from "./trackingInformation.service";
import { TrackingInformationController } from "./trackingInformation.controller";
import { TrackingInformationResolver } from "./trackingInformation.resolver";

@Module({
  imports: [TrackingInformationModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrackingInformationController],
  providers: [TrackingInformationService, TrackingInformationResolver],
  exports: [TrackingInformationService],
})
export class TrackingInformationModule {}
