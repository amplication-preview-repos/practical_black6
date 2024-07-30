import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DeliveryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="consignmentId" source="consignmentId" />
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <NumberInput step={1} label="packageId" source="packageId" />
        <DateTimeInput label="pickupDate" source="pickupDate" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
