import * as React from "react";
import { Create, SimpleForm, CreateProps, DateTimeInput } from "react-admin";

export const DbaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Department" source="Department" disabled />
        <DateTimeInput label="Name" source="name" disabled />
      </SimpleForm>
    </Create>
  );
};
