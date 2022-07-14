import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const HostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="application_name" source="applicationName" />
        <TextInput label="DBA_dr" source="dba_dr" />
        <TextInput label="DBA_primary" source="dba_primary" />
        <TextInput label="DBA_secondary" source="dba_secondary" />
        <DateTimeInput label="Hostname" source="Hostname" disabled />
        <TextInput label="Service_linked" source="service_linked" />
        <DateTimeInput label="UUID" source="UUID" disabled />
      </SimpleForm>
    </Create>
  );
};
