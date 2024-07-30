import { SortOrder } from "../../util/SortOrder";

export type TrackingInformationOrderByInput = {
  consignmentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
