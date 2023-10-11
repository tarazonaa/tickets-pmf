import { EditButton, Labeled, RichTextField, ShowButton, SimpleShowLayout } from "react-admin";
import Box from "@mui/material/Box"
export const DescShow = () => (
    <SimpleShowLayout>
       <RichTextField source="description" label="Descripción" />
       <Box
          sx={{
             display: "flex",
             justifyContent: "space-evenly",
          }}
       >
          <Labeled label={false}>
             <ShowButton label="Ver Ticket" />
          </Labeled>
          <Labeled label={false}>
             <EditButton label="Editar Ticket" />
          </Labeled>
       </Box>
    </SimpleShowLayout>
 )