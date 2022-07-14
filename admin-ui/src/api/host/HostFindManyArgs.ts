import { HostWhereInput } from "./HostWhereInput";
import { HostOrderByInput } from "./HostOrderByInput";

export type HostFindManyArgs = {
  where?: HostWhereInput;
  orderBy?: Array<HostOrderByInput>;
  skip?: number;
  take?: number;
};
