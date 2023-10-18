import {
   ArrayField,
   ChipField,
   Datagrid,
   Link,
   List,
   NumberField,
   ReferenceField,
   SingleFieldList,
   TextField,
   useRecordContext,
} from "react-admin"
import {ReportDesc} from "../../../Components/constant/ReportDesc"
import {ReportRecord} from "../../../Components/Context/ReportRecord"

export const LinkToTicket = (props: any) => {
   const record = useRecordContext<ReportRecord>()
   console.log(props)
   return (
      <Link to={`/tickets/${props.record.id}/show`}>
         <ChipField source="title" />
      </Link>
   )
}
export const LinkToClassroom = (props: any) => {
   const record = useRecordContext<ReportRecord>()
   console.log(props)
   return (
      <Link to={`/classrooms/${props.record._id.id}/show`}>
         <ChipField source="_id.name" />
      </Link>
   )
}

export const ReporteList = () => {
   return (
      <List title="Lista de reportes">
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
            <TextField source="name" label="Nombre" />
            <ArrayField source="mostTicketsClassroom" label="Aula con Mayor Número de Incidentes">
               <SingleFieldList>
                  <LinkToClassroom />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="leastTicketsClassroom" label="Aula con Menor Número de Incidentes">
               <SingleFieldList>
                  <LinkToClassroom />
               </SingleFieldList>
            </ArrayField>
            <TextField source="avgClosureTime" label="Tiempo de Resolución Promedio" />
            <ArrayField source="activeTickets" label="Incidentes Activos">
               <SingleFieldList>
                  <LinkToTicket />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="newTickets" label="Número de Incidentes Nuevos">
               <SingleFieldList>
                  <NumberField source="newTickets" label="Número de Incidentes Nuevos" />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="closedTickets" label="Número de Incidentes Cerrados">
               <SingleFieldList>
                  <NumberField source="closedTickets" label="Número de Incidentes Nuevos" />
               </SingleFieldList>
            </ArrayField>
         </Datagrid>
      </List>
   )
}
