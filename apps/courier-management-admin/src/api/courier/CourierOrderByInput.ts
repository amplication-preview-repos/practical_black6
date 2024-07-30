import { SortOrder } from "../../util/SortOrder";

export type CourierOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  vehicleNumber?: SortOrder;
  vehicleType?: SortOrder;
};
