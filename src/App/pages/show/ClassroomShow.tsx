import {
   Show,
   SimpleShowLayout,
   TextField,
   DateField,
   RichTextField,
   SingleFieldList,
   ArrayField,
   ChipField,
   useRecordContext,
} from "react-admin"
import {StatusReturner} from "../../../Components/constant/StatusReturner"
import {PriorityReturner} from "../../../Components/constant/PriorityReturner"
import {CategoryReturner} from "../../../Components/constant/CategoryReturner"
import {SubCategoryReturner} from "../../../Components/constant/SubCategoryReturner"
import {ClassroomReturner} from "../../../Components/constant/ClassroomReturner"
import {LinkToTicket} from "../report_list/ReportList"
import {YAxis} from "recharts"

export const ClassroomShow = () => {
   const EditClassroomTitle = () => {
      const record = useRecordContext()
      // the record can be empty while loading
      if (!record) return null
      return <span>{record.name}</span>
   }
   return (
      <Show title={<EditClassroomTitle />}>
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
            <TextField source="id" label="Id" />
            <TextField source="name" label="Nombre" />
            <TextField source="inventory" label="Inventario" />
         </SimpleShowLayout>
      </Show>
   )
}
