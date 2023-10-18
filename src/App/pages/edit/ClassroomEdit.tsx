import {Edit, SimpleForm, TextInput} from "react-admin"

export const ClassroomEdit = () => (
   <Edit>
      <SimpleForm warnWhenUnsavedChanges>
         <TextInput source="name" />
         <TextInput source="inventory" />
         <TextInput source="tickets" />
         <TextInput source="id" disabled />
      </SimpleForm>
   </Edit>
)
