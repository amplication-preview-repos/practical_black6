import { Module } from "@nestjs/common";
import { CustomerModule } from "./customer/customer.module";
import { CourierModule } from "./courier/courier.module";
import { PackageModelModule } from "./packageModel/packageModel.module";
import { DeliveryModule } from "./delivery/delivery.module";
import { ConsignmentModule } from "./consignment/consignment.module";
import { JobModule } from "./job/job.module";
import { ReportModule } from "./report/report.module";
import { NotificationModule } from "./notification/notification.module";
import { PaymentModule } from "./payment/payment.module";
import { TrackingInformationModule } from "./trackingInformation/trackingInformation.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    CustomerModule,
    CourierModule,
    PackageModelModule,
    DeliveryModule,
    ConsignmentModule,
    JobModule,
    ReportModule,
    NotificationModule,
    PaymentModule,
    TrackingInformationModule,
    FeedbackModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
