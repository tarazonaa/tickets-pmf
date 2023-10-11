import { useRecordContext } from 'react-admin'
import { TicketRecord } from '../Context/TicketRecord'

export const PriorityReturnerList = () => {
    const record = useRecordContext<TicketRecord>()
    switch (record.priority) {
       case 0:
          return record ? <span style={{color: 'green'}}>Baja</span> : null
       case 1:
          return record ? <span style={{color: 'orange'}}>Media</span> : null
       case 2:
          return record ? <span style={{color: 'crimson'}}>Alta</span> : null
       default:
          return <span>Baja</span>
    }
 }

 PriorityReturnerList.defaultProps = {
    label: "Prioridad",
 }