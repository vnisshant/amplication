import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ServicesLinkedShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="backup_host" source="backupHost" />
        <TextField label="dr_host" source="drHost" />
        <TextField label="ID" source="id" />
        <DateField source="ip_address" label="ip_address" />
        <DateField source="name" label="name" />
        <TextField label="primary_host" source="primaryHost" />
        <TextField label="Silo" source="silo" />
      </SimpleShowLayout>
    </Show>
  );
};
