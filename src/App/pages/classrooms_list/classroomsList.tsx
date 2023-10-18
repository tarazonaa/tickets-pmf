import {ArrayField, ChipField, Datagrid, List, SingleFieldList, TextField} from "react-admin"
import {LinkToTicket} from "../report_list/ReportList"

export const ClassroomList = () => (
   <List title="Lista de aulas">
      <Datagrid rowClick="edit">
         <TextField source="id" />
         <TextField source="name" label="Nombre" />
         <TextField source="inventory" label="Inventario" />
      </Datagrid>
   </List>
)
