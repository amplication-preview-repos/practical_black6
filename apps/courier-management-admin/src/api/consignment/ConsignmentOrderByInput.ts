import { SortOrder } from "../../util/SortOrder";

export type ConsignmentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  trackingNumber?: SortOrder;
  updatedAt?: SortOrder;
};
