import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeliveryWhereInput = {
  consignmentId?: IntNullableFilter;
  deliveryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  packageId?: IntNullableFilter;
  pickupDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
};
