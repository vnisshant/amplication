import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DbaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department" source="Department" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
