import { DbaWhereInput } from "./DbaWhereInput";
import { DbaOrderByInput } from "./DbaOrderByInput";

export type DbaFindManyArgs = {
  where?: DbaWhereInput;
  orderBy?: Array<DbaOrderByInput>;
  skip?: number;
  take?: number;
};
