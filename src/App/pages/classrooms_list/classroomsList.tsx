import {ArrayField, ChipField, Datagrid, List, SingleFieldList, TextField} from "react-admin"

export const ClassroomList = () => (
   <List>
      <Datagrid rowClick="edit">
         <TextField source="id" />
         <TextField source="name" />
         <TextField source="inventory" />
         <ArrayField source="tickets">
            <SingleFieldList>
               <ChipField source="_id" />
            </SingleFieldList>
         </ArrayField>
      </Datagrid>
   </List>
)
