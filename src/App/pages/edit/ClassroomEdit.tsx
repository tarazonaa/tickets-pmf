import {ArrayField, ChipField, Edit, SimpleForm, SingleFieldList, TextInput} from "react-admin"
import {LinkToTicket} from "../report_list/ReportList"

export const ClassroomEdit = () => (
   <Edit>
      <SimpleForm warnWhenUnsavedChanges>
         <TextInput source="id" disabled />
         <TextInput source="name" label="Nombre" />
         <TextInput source="inventory" label="Inventario" />
         <ArrayField source="tickets" label="Tickets Asociados">
            <SingleFieldList>
               <LinkToTicket />
            </SingleFieldList>
         </ArrayField>
      </SimpleForm>
   </Edit>
)
