import { TrackingInformationWhereInput } from "./TrackingInformationWhereInput";
import { TrackingInformationOrderByInput } from "./TrackingInformationOrderByInput";

export type TrackingInformationFindManyArgs = {
  where?: TrackingInformationWhereInput;
  orderBy?: Array<TrackingInformationOrderByInput>;
  skip?: number;
  take?: number;
};
