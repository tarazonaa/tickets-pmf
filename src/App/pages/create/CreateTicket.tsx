import {Create, SimpleForm, TextInput, required, SelectInput, useGetList} from "react-admin"
import {useState} from "react"
import { ClassroomSelector } from "../../../Components/constant/ClassroomSelector"
import { validateDescription } from "../../../Components/hooks/ValidateDescription"
import { validateClosing } from "../../../Components/hooks/ValidateClosing"
import { getSubcategories } from "../../../Components/constant/SubCategoriesMap"

export const CreateTicket = () => {
   const [selectedCategory, setSelectedCategory] = useState("")
   const [selectedStatus, setSelectedStatus] = useState(0)
   const {data: categories = [], isLoading} = useGetList("categories")
   const subcategories = getSubcategories(categories)

   const username = localStorage.getItem("username")
   return (
      <Create>
         <SimpleForm>
            <ClassroomSelector />
            <TextInput source="title" validate={[required()]} label="Título" />
            <TextInput source="assignee" validate={[required()]} label="Responsable" />
            <TextInput source="reportedBy" disabled label="Reportado por" defaultValue={username} />
            <SelectInput
               source="categoryId"
               label="Categoría"
               choices={categories}
               optionText="name"
               optionValue="id"
               validate={[required()]}
               isLoading={isLoading}
               onChange={(e: any) => setSelectedCategory(e.target.value)}
            />

            <SelectInput
               source="subcategoryIndex"
               label="Subcategoria"
               choices={subcategories.map((subcategory) => {
                  if (subcategory.parentCategoryId === selectedCategory) {
                     return subcategory
                  }
                  return null
               })}
               optionText="name"
               optionValue="index"
               validate={[required()]}
               isLoading={isLoading}
            />

            <SelectInput
               validate={[required()]}
               source="priority"
               label="Prioridad"
               choices={[
                  {id: 0, name: "Baja"},
                  {id: 1, name: "Media"},
                  {id: 2, name: "Alta"},
               ]}
            />
            <SelectInput
               validate={[required()]}
               source="status"
               label="Estatus"
               choices={[
                  {id: 0, name: "Pendiente"},
                  {id: 1, name: "En progreso"},
                  {id: 2, name: "Cerrado"},
               ]}
               onChange={(e: any) => setSelectedStatus(e.target.value)}
            />
            <TextInput
               source="description"
               multiline={true}
               label="Descripción"
               sx={{width: "50%"}}
               validate={validateDescription}
            />
            {selectedStatus === 2 && <TextInput
               source="closingComment"
               multiline={true}
               label="Proceso de resolución"
               validate={validateClosing}
               sx={{width: "50%"}}
            />}
            <TextInput source="govTrackingId" label="Folio de Oficio" />
         </SimpleForm>
      </Create>
   )
}
