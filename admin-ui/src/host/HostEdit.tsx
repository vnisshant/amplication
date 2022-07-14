import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const HostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="application_name" source="applicationName" />
        <TextInput label="DBA_dr" source="dba_dr" />
        <TextInput label="DBA_primary" source="dba_primary" />
        <TextInput label="DBA_secondary" source="dba_secondary" />
        <DateTimeInput label="Hostname" source="Hostname" disabled />
        <TextInput label="Service_linked" source="service_linked" />
        <DateTimeInput label="UUID" source="UUID" disabled />
      </SimpleForm>
    </Edit>
  );
};
