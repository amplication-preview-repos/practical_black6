import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ConsignmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="jobId" source="jobId" />
        <TextInput label="latitude" source="latitude" />
        <TextInput label="longitude" source="longitude" />
        <TextInput label="trackingNumber" source="trackingNumber" />
      </SimpleForm>
    </Edit>
  );
};
