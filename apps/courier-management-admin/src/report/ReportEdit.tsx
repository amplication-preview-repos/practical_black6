import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="generatedBy" source="generatedBy" />
        <TextInput label="reportType" source="reportType" />
      </SimpleForm>
    </Edit>
  );
};
