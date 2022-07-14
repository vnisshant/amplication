import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ServicesLinkedEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="backup_host" source="backupHost" />
        <TextInput label="dr_host" source="drHost" />
        <TextInput label="ip_address" source="ip_address" />
        <TextInput label="name" source="name" />
        <TextInput label="primary_host" source="primaryHost" />
        <TextInput label="Silo" source="silo" />
      </SimpleForm>
    </Edit>
  );
};
