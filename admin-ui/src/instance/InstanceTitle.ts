import { Instance as TInstance } from "../api/instance/Instance";

export const INSTANCE_TITLE_FIELD = "dba";

export const InstanceTitle = (record: TInstance): string => {
  return record.dba || record.id;
};
