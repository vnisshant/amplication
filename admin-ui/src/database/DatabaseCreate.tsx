import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DatabaseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="DBA" source="dba" />
        <TextInput label="Name" source="name" />
        <TextInput label="UUID" source="uuid" />
      </SimpleForm>
    </Create>
  );
};
