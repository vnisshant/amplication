import * as React from "react";
import { Edit, SimpleForm, EditProps, DateTimeInput } from "react-admin";

export const DbaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Department" source="Department" disabled />
        <DateTimeInput label="Name" source="name" disabled />
      </SimpleForm>
    </Edit>
  );
};
