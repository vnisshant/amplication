import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HostWhereInput = {
  applicationName?: StringNullableFilter;
  dba_dr?: StringNullableFilter;
  dba_primary?: StringNullableFilter;
  dba_secondary?: StringNullableFilter;
  id?: StringFilter;
  service_linked?: StringNullableFilter;
};
