import {
   ArrayField,
   ChipField,
   Datagrid,
   Link,
   List,
   ReferenceField,
   SingleFieldList,
   TextField,
   useRecordContext,
} from "react-admin"
import {ReportDesc} from "../../../Components/constant/ReportDesc"
import {ReportRecord} from "../../../Components/Context/ReportRecord"

export const LinkToTicket = (props: any) => {
   const record = useRecordContext<ReportRecord>()
   return (
      <Link to={`/tickets/${props.record.id}/show`}>
         <ChipField source="title" />
      </Link>
   )
}
export const LinkToClassroom = (props: any) => {
   const record = useRecordContext<ReportRecord>()
   return (
      <Link to={`/classroom/${props.record._id.id}/show`}>
         <ChipField source="_id.name" />
      </Link>
   )
}

export const ReporteList = () => {
   return (
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
            expand={<ReportDesc />}
            expandSingle
         >
            <TextField source="id" />
            <TextField source="name" />
            <ArrayField source="mostTicketsClassroom">
               <SingleFieldList>
                  <LinkToClassroom />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="leastTicketsClassroom">
               <SingleFieldList>
                  <LinkToClassroom />
               </SingleFieldList>
            </ArrayField>
            <TextField source="avgClosureTime" />
            <ArrayField source="activeTickets">
               <SingleFieldList>
                  <LinkToTicket />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="newTickets" label="Número de Tickets Nuevos">
               <SingleFieldList>
                  <ChipField source="newTickets" label="Número de Tickets Nuevos" />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="closedTickets" label="Número de Tickets Nuevos">
               <SingleFieldList>
                  <ChipField source="closedTickets" label="Número de Tickets Nuevos" />
               </SingleFieldList>
            </ArrayField>
         </Datagrid>
      </List>
   )
}
