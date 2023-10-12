import {Datagrid, DateField, List, TextField} from "react-admin"

import {StatusReturner} from "../../../Components/constant/StatusReturner"
import {CategoryReturner} from "../../../Components/constant/CategoryReturner"
import {SubCategoryReturner} from "../../../Components/constant/SubCategoryReturner"
import {ClassroomReturner} from "../../../Components/constant/ClassroomReturner"
import {DescShow} from "../../../Components/constant/DescShow"
import {PriorityReturnerList} from "../../../Components/constant/PReturnerList"

export const TicketList = () => {
   return (
      <List>
         <Datagrid
            rowClick="expand"
            sx={{
               "& .MuiTableCell-head": {
                  fontWeight: "bold",
               },
               "& .column-description": {
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: "200px",
                  textOverflow: "ellipsis",
               },
            }}
            expand={<DescShow />}
            expandSingle
         >
            <TextField source="id" />
            <ClassroomReturner />
            <TextField source="title" label="Título" />
            <TextField source="assignee" label="Responsable" />
            <TextField source="description" label="Descripción" sx={{textOverflow: "ellipsis"}} />
            <CategoryReturner />
            <SubCategoryReturner />
            <StatusReturner />
            <PriorityReturnerList />
            <DateField source="createdAt" label="Fecha de creación" />
            <DateField source="closedAt" label="Fecha de cierre" />
         </Datagrid>
      </List>
   )
}
