import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Hosts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="application_name" source="applicationName" />
        <TextField label="DBA_dr" source="dba_dr" />
        <TextField label="DBA_primary" source="dba_primary" />
        <TextField label="DBA_secondary" source="dba_secondary" />
        <DateField source="Hostname" label="Hostname" />
        <TextField label="ID" source="id" />
        <TextField label="Service_linked" source="service_linked" />
        <DateField source="UUID" label="UUID" />
      </Datagrid>
    </List>
  );
};
