import {Show, SimpleShowLayout, TextField, DateField, RichTextField} from "react-admin"
import {StatusReturner} from "../../../Components/constant/StatusReturner"
import {PriorityReturner} from "../../../Components/constant/PriorityReturner"
import {CategoryReturner} from "../../../Components/constant/CategoryReturner"
import {SubCategoryReturner} from "../../../Components/constant/SubCategoryReturner"
import {ClassroomReturner} from "../../../Components/constant/ClassroomReturner"

export const TicketShow = () => {
   return (
      <Show title="Ver Incidente">
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
            <TextField source="id" />
            <ClassroomReturner />
            <TextField source="title" label="Título" />
            <TextField source="assignee" label="Responsable" />
            <TextField source="reportedBy" label="Reportado por" />
            <RichTextField source="description" label="Descripción" />
            <CategoryReturner />
            <SubCategoryReturner />
            <StatusReturner />
            <PriorityReturner />
            <DateField source="createdAt" label="Fecha de creación" />
            <TextField source="intermediaries" label="Intermediarios" />
            <DateField source="closedAt" label="Fecha de cierre" />
            <TextField source="closingComment" label="Proceso de resolución" />
            <TextField source="govTrackingId" label="Folio de Oficio" />
         </SimpleShowLayout>
      </Show>
   )
}
