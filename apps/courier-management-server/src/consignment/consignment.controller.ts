import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConsignmentService } from "./consignment.service";
import { ConsignmentControllerBase } from "./base/consignment.controller.base";

@swagger.ApiTags("consignments")
@common.Controller("consignments")
export class ConsignmentController extends ConsignmentControllerBase {
  constructor(
    protected readonly service: ConsignmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
