import { SelectInput, useGetList } from "react-admin"

export const ClassroomSelector = () => {
   const {data: classrooms, isLoading} = useGetList("classrooms")
   if (isLoading) return <span>Cargando...</span>
   return (
      <SelectInput
         source="classroomId"
         label="Aula"
         choices={
            classrooms
               ? classrooms.map((classroom: any) => {
                    return {
                       id: classroom.id,
                       name: classroom.name,
                    }
                 })
               : []
         }
         emptyText={"Sin especificar"}
      />
   )
}
