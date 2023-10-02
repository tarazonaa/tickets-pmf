import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
} from "react-admin";

export const TicketShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <RichTextField source="description" />
      <TextField source="status" />
      <TextField source="priority" />
      <DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);
