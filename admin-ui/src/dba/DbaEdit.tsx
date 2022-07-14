import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DbaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Department" source="Department" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
