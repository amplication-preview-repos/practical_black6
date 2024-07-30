import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currentLocation" source="currentLocation" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="status" source="status" />
        <TextInput label="trackingNumber" source="trackingNumber" />
      </SimpleForm>
    </Create>
  );
};
