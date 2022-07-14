import { HostWhereUniqueInput } from "./HostWhereUniqueInput";
import { HostUpdateInput } from "./HostUpdateInput";

export type UpdateHostArgs = {
  where: HostWhereUniqueInput;
  data: HostUpdateInput;
};
