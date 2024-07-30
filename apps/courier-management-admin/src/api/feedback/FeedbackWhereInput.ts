import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedbackWhereInput = {
  comments?: StringNullableFilter;
  id?: StringFilter;
  packageId?: IntNullableFilter;
  rating?: IntNullableFilter;
  userId?: IntNullableFilter;
};
