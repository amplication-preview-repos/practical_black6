import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CourierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <NumberInput step={1} label="userId" source="userId" />
        <TextInput label="vehicleNumber" source="vehicleNumber" />
        <TextInput label="vehicleType" source="vehicleType" />
      </SimpleForm>
    </Create>
  );
};
