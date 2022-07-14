import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ServicesLinkedCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="backup_host" source="backupHost" />
        <TextInput label="dr_host" source="drHost" />
        <TextInput label="ip_address" source="ip_address" />
        <TextInput label="name" source="name" />
        <TextInput label="primary_host" source="primaryHost" />
        <TextInput label="Silo" source="silo" />
      </SimpleForm>
    </Create>
  );
};
