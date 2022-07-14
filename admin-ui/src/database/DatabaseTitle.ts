import { Database as TDatabase } from "../api/database/Database";

export const DATABASE_TITLE_FIELD = "name";

export const DatabaseTitle = (record: TDatabase): string => {
  return record.name || record.id;
};
