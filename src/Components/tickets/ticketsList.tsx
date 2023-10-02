import { Datagrid, DateField, List, TextField } from "react-admin";

export const TicketList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="status" />
      <TextField source="priority" />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);
