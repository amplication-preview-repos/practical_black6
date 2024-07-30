import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConsignmentModuleBase } from "./base/consignment.module.base";
import { ConsignmentService } from "./consignment.service";
import { ConsignmentController } from "./consignment.controller";
import { ConsignmentResolver } from "./consignment.resolver";

@Module({
  imports: [ConsignmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConsignmentController],
  providers: [ConsignmentService, ConsignmentResolver],
  exports: [ConsignmentService],
})
export class ConsignmentModule {}
