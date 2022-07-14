import { DatabaseWhereUniqueInput } from "./DatabaseWhereUniqueInput";
import { DatabaseUpdateInput } from "./DatabaseUpdateInput";

export type UpdateDatabaseArgs = {
  where: DatabaseWhereUniqueInput;
  data: DatabaseUpdateInput;
};
