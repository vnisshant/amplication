import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const DbaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="Department" label="Department" />
        <TextField label="ID" source="id" />
        <DateField source="name" label="Name" />
      </SimpleShowLayout>
    </Show>
  );
};
