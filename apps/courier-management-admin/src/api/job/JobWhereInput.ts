import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobWhereInput = {
  currentLocation?: StringNullableFilter;
  customerId?: IntNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  trackingNumber?: StringNullableFilter;
};
