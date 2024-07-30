import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DeliveryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="consignmentId" source="consignmentId" />
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <NumberInput step={1} label="packageId" source="packageId" />
        <DateTimeInput label="pickupDate" source="pickupDate" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
