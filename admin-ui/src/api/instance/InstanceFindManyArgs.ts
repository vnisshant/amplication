import { InstanceWhereInput } from "./InstanceWhereInput";
import { InstanceOrderByInput } from "./InstanceOrderByInput";

export type InstanceFindManyArgs = {
  where?: InstanceWhereInput;
  orderBy?: Array<InstanceOrderByInput>;
  skip?: number;
  take?: number;
};
