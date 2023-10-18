import {
   ArrayField,
   ChipField,
   EditButton,
   Labeled,
   NumberField,
   RichTextField,
   ShowButton,
   SimpleShowLayout,
   SingleFieldList,
   TextField,
} from "react-admin"
import Box from "@mui/material/Box"
import {LinkToClassroom, LinkToTicket} from "../../App/pages/report_list/ReportList"

export const ReportDesc = () => (
   <SimpleShowLayout>
      <TextField source="name" label=" " />
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
      <Box
         sx={{
            display: "flex",
            justifyContent: "space-evenly",
         }}
      >
         <Labeled label={false}>
            <ShowButton label="Ver Reporte" size="medium" />
         </Labeled>
      </Box>
   </SimpleShowLayout>
)
