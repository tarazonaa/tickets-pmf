import {ArrayField, ChipField, Edit, SimpleForm, SingleFieldList, TextInput, useRecordContext} from "react-admin"
import {LinkToTicket} from "../report_list/ReportList"

const EditClassroomTitle = () => {
   const record = useRecordContext()
   // the record can be empty while loading
   if (!record) return null
   return <span>{record.name}</span>
}

export const ClassroomEdit = () => (
   <Edit title={<EditClassroomTitle />}>
      <SimpleForm warnWhenUnsavedChanges>
         <TextInput source="id" disabled />
         <TextInput source="name" label="Nombre" />
         <TextInput source="inventory" label="Inventario" />
      </SimpleForm>
   </Edit>
)
