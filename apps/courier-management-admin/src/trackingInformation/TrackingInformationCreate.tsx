import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TrackingInformationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="consignmentId" source="consignmentId" />
        <NumberInput step={1} label="jobId" source="jobId" />
        <TextInput label="latitude" source="latitude" />
        <TextInput label="longitude" source="longitude" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
