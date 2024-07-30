import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CourierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <NumberInput step={1} label="userId" source="userId" />
        <TextInput label="vehicleNumber" source="vehicleNumber" />
        <TextInput label="vehicleType" source="vehicleType" />
      </SimpleForm>
    </Edit>
  );
};
