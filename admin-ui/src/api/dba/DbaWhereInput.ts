import { StringFilter } from "../../util/StringFilter";

export type DbaWhereInput = {
  Department?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
};
