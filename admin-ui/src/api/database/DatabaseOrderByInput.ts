import { SortOrder } from "../../util/SortOrder";

export type DatabaseOrderByInput = {
  createdAt?: SortOrder;
  dba?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  uuid?: SortOrder;
};
