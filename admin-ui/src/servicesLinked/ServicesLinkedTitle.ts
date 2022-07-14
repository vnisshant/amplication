import { ServicesLinked as TServicesLinked } from "../api/servicesLinked/ServicesLinked";

export const SERVICESLINKED_TITLE_FIELD = "name";

export const ServicesLinkedTitle = (record: TServicesLinked): string => {
  return record.name || record.id;
};
