import { Datagrid, DateField, List, TextField } from "react-admin";

export const TicketList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" label="Titulo"/>  
      <TextField source="description" label="Descripcion"/>
      <TextField source="status" label="Estatus"/>
      <TextField source="priority" label="Prioridad" />
      <DateField source="createdAt" label="Fecha de creacion"/>
    </Datagrid>
  </List>
);
