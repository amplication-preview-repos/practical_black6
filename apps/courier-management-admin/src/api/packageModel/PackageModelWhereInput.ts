import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PackageModelWhereInput = {
  customerId?: IntNullableFilter;
  id?: StringFilter;
  packageDetail?: StringNullableFilter;
  receiverInfo?: StringNullableFilter;
  senderInfo?: StringNullableFilter;
  status?: StringNullableFilter;
};
