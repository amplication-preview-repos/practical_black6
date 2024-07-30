import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  consignmentId?: SortOrder;
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  id?: SortOrder;
  packageId?: SortOrder;
  pickupDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
