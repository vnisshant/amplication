import { Dba as TDba } from "../api/dba/Dba";

export const DBA_TITLE_FIELD = "name";

export const DbaTitle = (record: TDba): string => {
  return record.name || record.id;
};
