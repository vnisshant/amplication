import { Host as THost } from "../api/host/Host";

export const HOST_TITLE_FIELD = "applicationName";

export const HostTitle = (record: THost): string => {
  return record.applicationName || record.id;
};
