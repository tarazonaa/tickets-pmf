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
import {DescShow} from "../../../Components/constant/DescShow"
import {ReportRecord} from "../../../Components/Context/ReportRecord"

export const ReporteList = () => {
   const LinkToTicket = (props: any) => {
      const record = useRecordContext<ReportRecord>()
      return (
         <Link to={`/tickets/${props.record.id}/show`}>
            <ChipField source="title" />
         </Link>
      )
   }
   const LinkToClassroom = (props: any) => {
      const record = useRecordContext<ReportRecord>()
      return (
         <Link to={`/classroom/${props.record.id}/show`}>
            <ChipField source="name" />
         </Link>
      )
   }
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
            expand={<DescShow />}
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
            <ArrayField source="newTickets">
               <SingleFieldList>
                  <ChipField source="_id" />
               </SingleFieldList>
            </ArrayField>
            <TextField source="closedTickets._id" />
         </Datagrid>
      </List>
   )
}
