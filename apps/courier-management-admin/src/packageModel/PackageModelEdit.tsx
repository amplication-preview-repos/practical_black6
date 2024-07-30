import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const PackageModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="customerId" source="customerId" />
        <TextInput label="packageDetail" multiline source="packageDetail" />
        <TextInput label="receiverInfo" multiline source="receiverInfo" />
        <TextInput label="senderInfo" multiline source="senderInfo" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
