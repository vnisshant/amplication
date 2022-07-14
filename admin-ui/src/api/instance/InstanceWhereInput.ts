import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InstanceWhereInput = {
  createdAt?: DateTimeFilter;
  dba?: StringFilter;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
  uuid?: StringNullableFilter;
};
