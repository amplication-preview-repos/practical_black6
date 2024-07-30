import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PackageModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="packageDetail" multiline source="packageDetail" />
        <TextInput label="receiverInfo" multiline source="receiverInfo" />
        <TextInput label="senderInfo" multiline source="senderInfo" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
