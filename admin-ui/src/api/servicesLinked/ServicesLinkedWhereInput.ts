import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ServicesLinkedWhereInput = {
  backupHost?: StringNullableFilter;
  drHost?: StringNullableFilter;
  id?: StringFilter;
  primaryHost?: StringNullableFilter;
  silo?: StringNullableFilter;
};
