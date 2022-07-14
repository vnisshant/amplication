import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DatabaseWhereInput = {
  dba?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  uuid?: StringNullableFilter;
};
