import { SortOrder } from "../../util/SortOrder";

export type HostOrderByInput = {
  applicationName?: SortOrder;
  dba_dr?: SortOrder;
  dba_primary?: SortOrder;
  dba_secondary?: SortOrder;
  Hostname?: SortOrder;
  id?: SortOrder;
  service_linked?: SortOrder;
  UUID?: SortOrder;
};
