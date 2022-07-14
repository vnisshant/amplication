import { DbaWhereUniqueInput } from "./DbaWhereUniqueInput";
import { DbaUpdateInput } from "./DbaUpdateInput";

export type UpdateDbaArgs = {
  where: DbaWhereUniqueInput;
  data: DbaUpdateInput;
};
