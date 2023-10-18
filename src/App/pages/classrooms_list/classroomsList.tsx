import {ArrayField, ChipField, Datagrid, List, SingleFieldList, TextField} from "react-admin"
import {LinkToTicket} from "../report_list/ReportList"

export const ClassroomList = () => (
   <List>
      <Datagrid rowClick="edit">
         <TextField source="id" />
         <TextField source="name" />
         <TextField source="inventory" />
      </Datagrid>
   </List>
)
