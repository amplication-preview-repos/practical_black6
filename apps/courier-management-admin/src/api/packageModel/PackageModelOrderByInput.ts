import { SortOrder } from "../../util/SortOrder";

export type PackageModelOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  packageDetail?: SortOrder;
  receiverInfo?: SortOrder;
  senderInfo?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
