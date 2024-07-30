import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReportWhereInput = {
  content?: StringNullableFilter;
  generatedBy?: StringNullableFilter;
  id?: StringFilter;
  reportType?: StringNullableFilter;
};
