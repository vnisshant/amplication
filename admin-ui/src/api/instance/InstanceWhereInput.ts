import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InstanceWhereInput = {
  dba?: StringNullableFilter;
  id?: StringFilter;
  uuid?: StringNullableFilter;
};
