import {useEffect, useState} from "react"
import {
   DateInput,
   Edit,
   SelectInput,
   SimpleForm,
   TextInput,
   required,
   useGetList,
   useRecordContext,
   // useGetOne,
   // RecordContextProvider,
} from "react-admin"

interface TicketRecord {
   title: string
   categoryId: string
   subcategoryIndex: number
   priority: number
   intermediaries: string
   description: string
   status: number
   createdAt: string
   id: number
   closedAt: string
}
export const TicketEdit = (props: any) => {
   const record = useRecordContext<TicketRecord>()
   const [selectedCategory, setSelectedCategory] = useState(record?.categoryId || "")
   const {data, isLoading} = useGetList("categories")

   const handleSelectCategory = (id: string) => {
      setSelectedCategory(id)
   }

   const validateDescription = (value: string) => {
      if (value && value.length > 500) {
         return "Descripción debe de ser máximo 500 caracteres"
      }
      return undefined
   }
   const validateClosing = (value: string) => {
      if (value && value.length > 250) {
         4
         return "Comentario de cierre debe de ser máximo 250 caracteres"
      }
      return undefined
   }

   const subcategories: {
      index: number
      name: string
      parentCategoryId: string
   }[] = []
   if (data) {
      data.forEach((category: {id: string; name: string; subcategories: string[]}) => {
         category?.subcategories.forEach((subcategory: string, index: number) => {
            subcategories.push({
               parentCategoryId: category.id,
               index: index,
               name: subcategory,
            })
         })
      })
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
      return (
         subcategories.length > 0 && (
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
         )
      )
   }

   return (
      <Edit {...props}>
         <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="title" validate={[required()]} label="Título" />
            <TextInput source="assignee" validate={[required()]} label="Responsable" />
            <TextInput source="reportedBy" disabled validate={[required()]} label="Reportado por" />
            <SelectInput
               source="categoryId"
               label="Categoría"
               choices={data}
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
            <DateInput source="createdAt" disabled />
            <DateInput source="closedAt" disabled />
         </SimpleForm>
      </Edit>
   )
}
