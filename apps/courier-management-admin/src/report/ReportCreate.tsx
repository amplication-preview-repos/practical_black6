import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="generatedBy" source="generatedBy" />
        <TextInput label="reportType" source="reportType" />
      </SimpleForm>
    </Create>
  );
};
