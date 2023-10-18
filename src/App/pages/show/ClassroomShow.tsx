import {
   Show,
   SimpleShowLayout,
   TextField,
   DateField,
   RichTextField,
   SingleFieldList,
   ArrayField,
   ChipField,
} from "react-admin"
import {StatusReturner} from "../../../Components/constant/StatusReturner"
import {PriorityReturner} from "../../../Components/constant/PriorityReturner"
import {CategoryReturner} from "../../../Components/constant/CategoryReturner"
import {SubCategoryReturner} from "../../../Components/constant/SubCategoryReturner"
import {ClassroomReturner} from "../../../Components/constant/ClassroomReturner"
import {LinkToTicket} from "../report_list/ReportList"

export const ClassroomShow = () => {
   return (
      <Show>
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
            <TextField source="name" />
            <TextField source="inventory" />
         </SimpleShowLayout>
      </Show>
   )
}
