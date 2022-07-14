import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="application_name" source="applicationName" />
        <TextField label="DBA_dr" source="dba_dr" />
        <TextField label="DBA_primary" source="dba_primary" />
        <TextField label="DBA_secondary" source="dba_secondary" />
        <DateField source="Hostname" label="Hostname" />
        <TextField label="ID" source="id" />
        <TextField label="Service_linked" source="service_linked" />
        <DateField source="UUID" label="UUID" />
      </SimpleShowLayout>
    </Show>
  );
};
