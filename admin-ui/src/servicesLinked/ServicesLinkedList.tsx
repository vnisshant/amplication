import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ServicesLinkedList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Services_list"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="backup_host" source="backupHost" />
        <TextField label="dr_host" source="drHost" />
        <TextField label="ID" source="id" />
        <TextField label="ip_address" source="ip_address" />
        <TextField label="name" source="name" />
        <TextField label="primary_host" source="primaryHost" />
        <TextField label="Silo" source="silo" />
      </Datagrid>
    </List>
  );
};
