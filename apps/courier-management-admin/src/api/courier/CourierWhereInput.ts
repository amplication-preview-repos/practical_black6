import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CourierWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  userId?: IntNullableFilter;
  vehicleNumber?: StringNullableFilter;
  vehicleType?: StringNullableFilter;
};
