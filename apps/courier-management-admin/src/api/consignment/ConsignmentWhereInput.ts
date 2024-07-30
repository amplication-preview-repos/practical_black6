import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConsignmentWhereInput = {
  id?: StringFilter;
  jobId?: IntNullableFilter;
  latitude?: StringNullableFilter;
  longitude?: StringNullableFilter;
  trackingNumber?: StringNullableFilter;
};
