import {
   Show,
   SimpleShowLayout,
   TextField,
   DateField,
   RichTextField,
   ArrayField,
   SingleFieldList,
   NumberField,
   useRecordContext,
} from "react-admin"
import {StatusReturner} from "../../../Components/constant/StatusReturner"
import {PriorityReturner} from "../../../Components/constant/PriorityReturner"
import {CategoryReturner} from "../../../Components/constant/CategoryReturner"
import {SubCategoryReturner} from "../../../Components/constant/SubCategoryReturner"
import {ClassroomReturner} from "../../../Components/constant/ClassroomReturner"
import {LinkToClassroom, LinkToTicket} from "../report_list/ReportList"

export const ReportShow = () => {
   const EditReportTitle = () => {
      const record = useRecordContext()
      // the record can be empty while loading
      if (!record) return null
      return <span>{record.name}</span>
   }
   return (
      <Show title={<EditReportTitle />}>
         <SimpleShowLayout
            sx={{
               "& .MuiTypography-root": {
                  fontSize: "15px",
               },
               "& .MuiTypography-body1 span": {
                  fontSize: "16px",
                  fontWeight: "bold",
               },
            }}
         >
            <TextField source="name" label="" sx={{fontSize: "2em", fontWeight: "bold"}} />
            <ArrayField source="mostTicketsClassroom" label="Aula Con Menos Tickets">
               <SingleFieldList>
                  <LinkToClassroom />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="leastTicketsClassroom" label="Aula Con Más Tickets">
               <SingleFieldList>
                  <LinkToClassroom />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="activeTickets" label="Tickets Activos">
               <SingleFieldList>
                  <LinkToTicket />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="newTickets" label="Número de Tickets Nuevos">
               <SingleFieldList>
                  <NumberField source="newTickets" label="Número de Tickets Nuevos" />
               </SingleFieldList>
            </ArrayField>
            <ArrayField source="closedTickets" label="Número de Tickets Cerrados">
               <SingleFieldList>
                  <NumberField source="closedTickets" label="Número de Tickets Nuevos" />
               </SingleFieldList>
            </ArrayField>
         </SimpleShowLayout>
      </Show>
   )
}
