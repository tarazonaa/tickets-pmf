import {ArrayField, ChipField, Datagrid, List, ReferenceField, SingleFieldList, TextField} from "react-admin"
import {DescShow} from "../../../Components/constant/DescShow"

export const ReporteList = () => (
   <List>
      <Datagrid
         rowClick="expand"
         sx={{
            "& .MuiTableCell-head": {
               fontWeight: "bold",
            },
            "& .column-description": {
               overflow: "hidden",
               whiteSpace: "nowrap",
               maxWidth: "200px",
               textOverflow: "ellipsis",
            },
         }}
         expand={<DescShow />}
         expandSingle
      >
         <TextField source="id" />
         <TextField source="name" />
         <TextField source="mostTicketsClassroom._eventsCount" />
         <TextField source="leastTicketsClassroom._events" />
         <TextField source="avgClosureTime" />
         <TextField source="activeTickets" />
         <ArrayField source="newTickets">
            <SingleFieldList>
               <ChipField source="_id" />
            </SingleFieldList>
         </ArrayField>
         <TextField source="closedTickets" />
      </Datagrid>
   </List>
)
