import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TrackingInformationWhereInput = {
  consignmentId?: IntNullableFilter;
  id?: StringFilter;
  jobId?: IntNullableFilter;
  latitude?: StringNullableFilter;
  longitude?: StringNullableFilter;
  status?: StringNullableFilter;
};
