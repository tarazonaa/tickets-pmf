import {Link, useGetList, useRecordContext} from "react-admin"
import {TicketRecord} from "../Context/TicketRecord"
import {ClassroomRecord} from "../Context/ClassroomRecord"

export const ClassroomReturner = () => {
   const record = useRecordContext<TicketRecord>()
   const {data: ClassData, isLoading} = useGetList("classrooms")
   if (isLoading) return <span>Cargando...</span>
   const classrooms = ClassData as ClassroomRecord[]
   const classroom = classrooms.find((classroom) => {
      return classroom.id === record.classroomId
   })
   return (
      <Link to={`/classrooms/${classroom?.id}/show`}>
         <span>{classroom?.name}</span>
      </Link>
   )
}

ClassroomReturner.defaultProps = {
   label: "Aula",
}
