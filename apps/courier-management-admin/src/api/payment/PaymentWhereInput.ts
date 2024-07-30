import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  jobId?: IntNullableFilter;
  paymentMethod?: StringNullableFilter;
  status?: StringNullableFilter;
  transactionId?: StringNullableFilter;
  userId?: IntNullableFilter;
};
