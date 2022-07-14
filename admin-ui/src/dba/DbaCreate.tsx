import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DbaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="Department" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
