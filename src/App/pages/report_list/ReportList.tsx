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
            <TextField source="mostTicketsClassroom._id" />
            <TextField source="leastTicketsClassroom._id" />
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
