import { ConsignmentWhereInput } from "./ConsignmentWhereInput";
import { ConsignmentOrderByInput } from "./ConsignmentOrderByInput";

export type ConsignmentFindManyArgs = {
  where?: ConsignmentWhereInput;
  orderBy?: Array<ConsignmentOrderByInput>;
  skip?: number;
  take?: number;
};
