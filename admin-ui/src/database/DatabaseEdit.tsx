import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DatabaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="DBA" source="dba" />
        <TextInput label="Name" source="name" />
        <TextInput label="UUID" source="uuid" />
      </SimpleForm>
    </Edit>
  );
};
