import { ServicesLinkedWhereInput } from "./ServicesLinkedWhereInput";
import { ServicesLinkedOrderByInput } from "./ServicesLinkedOrderByInput";

export type ServicesLinkedFindManyArgs = {
  where?: ServicesLinkedWhereInput;
  orderBy?: Array<ServicesLinkedOrderByInput>;
  skip?: number;
  take?: number;
};
