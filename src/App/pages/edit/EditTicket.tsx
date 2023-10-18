import {useEffect, useState} from "react"
import {DateInput, Edit, SelectInput, SimpleForm, TextInput, required, useGetList, useRecordContext} from "react-admin"
import {TicketRecord} from "../../../Components/Context/TicketRecord"
import {validateDescription} from "../../../Components/hooks/ValidateDescription"
import {validateClosing} from "../../../Components/hooks/ValidateClosing"
import {getSubcategories} from "../../../Components/constant/SubCategoriesMap"
import {ClassroomSelector} from "../../../Components/constant/ClassroomSelector"

export const TicketEdit = (props: any) => {
   const record = useRecordContext<TicketRecord>()
   const [selectedCategory, setSelectedCategory] = useState(record?.categoryId || "")
   const {data: categories = [], isLoading} = useGetList("categories")
   const subcategories = getSubcategories(categories)

   const handleSelectCategory = (id: string) => {
      setSelectedCategory(id)
   }

   const EditWithContext = () => {
      const record = useRecordContext<TicketRecord>()
      useEffect(() => {
         if (selectedCategory !== "") {
            handleSelectCategory(selectedCategory)
         } else {
            if (record) {
               handleSelectCategory(record.categoryId)
            }
         }
      }, [record])
      return subcategories.length > 0 ? (
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
            defaultValue={record?.subcategoryIndex || 0}
         />
      ) : null
   }
   const username = localStorage.getItem("username")
   const EditTicketTitle = () => {
      const record = useRecordContext()
      // the record can be empty while loading
      if (!record) return null
      return <span>Incidente #{record.id}</span>
   }
   return (
      <Edit {...props} title={<EditTicketTitle />}>
         <SimpleForm warnWhenUnsavedChanges>
            <TextInput source="id" disabled />
            <TextInput source="title" validate={[required()]} label="Título" />
            <ClassroomSelector />
            <TextInput source="assignee" validate={[required()]} label="Responsable" />
            <TextInput
               source="reportedBy"
               disabled
               validate={[required()]}
               label="Reportado por"
               defaultValue={username}
            />
            <SelectInput
               source="categoryId"
               label="Categoría"
               choices={categories}
               optionText="name"
               optionValue="id"
               validate={[required()]}
               isLoading={isLoading}
               onChange={(e) => handleSelectCategory(e.target.value)}
            />
            <EditWithContext />
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
            />
            <TextInput source="intermediaries" />
            <TextInput
               source="description"
               multiline={true}
               label="Descripción"
               sx={{width: "50%"}}
               validate={validateDescription}
            />
            <TextInput
               source="closingComment"
               multiline={true}
               label="Proceso de resolución"
               validate={validateClosing}
               sx={{width: "50%"}}
            />
            <TextInput source="govTrackidId" label="Folio de Oficio" />
            <DateInput source="createdAt" disabled />
            <DateInput source="closedAt" disabled />
         </SimpleForm>
      </Edit>
   )
}
