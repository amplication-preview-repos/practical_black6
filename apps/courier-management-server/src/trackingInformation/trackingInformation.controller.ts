import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TrackingInformationService } from "./trackingInformation.service";
import { TrackingInformationControllerBase } from "./base/trackingInformation.controller.base";

@swagger.ApiTags("trackingInformations")
@common.Controller("trackingInformations")
export class TrackingInformationController extends TrackingInformationControllerBase {
  constructor(
    protected readonly service: TrackingInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
