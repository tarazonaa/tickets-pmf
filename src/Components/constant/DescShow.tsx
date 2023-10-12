import {EditButton, Labeled, RichTextField, ShowButton, SimpleShowLayout, TextField} from "react-admin"
import Box from "@mui/material/Box"
export const DescShow = () => (
   <SimpleShowLayout>
      <TextField source="reportedBy" label="Reportado por" />
      <RichTextField source="description" label="Descripción" />
      <TextField source="intermediaries" label="Intermediarios" />
      <TextField source="closingComment" label="Proceso de resolución" />
      <TextField source="govTrackingId" label="Folio de Oficio" />
      <Box
         sx={{
            display: "flex",
            justifyContent: "space-evenly",
         }}
      >
         <Labeled label={false}>
            <ShowButton label="Ver Ticket" size="medium" />
         </Labeled>
         <Labeled label={false}>
            <EditButton label="Editar Ticket" size="medium"/>
         </Labeled>
      </Box>
   </SimpleShowLayout>
)
