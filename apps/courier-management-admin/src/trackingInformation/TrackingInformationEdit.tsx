import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TrackingInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="consignmentId" source="consignmentId" />
        <NumberInput step={1} label="jobId" source="jobId" />
        <TextInput label="latitude" source="latitude" />
        <TextInput label="longitude" source="longitude" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
