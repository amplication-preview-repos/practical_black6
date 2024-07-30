import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TrackingInformationResolverBase } from "./base/trackingInformation.resolver.base";
import { TrackingInformation } from "./base/TrackingInformation";
import { TrackingInformationService } from "./trackingInformation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TrackingInformation)
export class TrackingInformationResolver extends TrackingInformationResolverBase {
  constructor(
    protected readonly service: TrackingInformationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
