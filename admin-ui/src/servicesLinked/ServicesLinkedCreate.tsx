import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ServicesLinkedCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="backup_host" source="backupHost" />
        <TextInput label="dr_host" source="drHost" />
        <DateTimeInput label="ip_address" source="ip_address" disabled />
        <DateTimeInput label="name" source="name" disabled />
        <TextInput label="primary_host" source="primaryHost" />
        <TextInput label="Silo" source="silo" />
      </SimpleForm>
    </Create>
  );
};
