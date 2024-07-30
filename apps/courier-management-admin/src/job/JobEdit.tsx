import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="currentLocation" source="currentLocation" />
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="status" source="status" />
        <TextInput label="trackingNumber" source="trackingNumber" />
      </SimpleForm>
    </Edit>
  );
};
