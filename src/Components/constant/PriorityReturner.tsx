import React from 'react'
import { useRecordContext } from 'react-admin'
import { TicketRecord } from '../Context/TicketRecord'

export const PriorityReturner = () => {
    const record = useRecordContext<TicketRecord>()
    switch (record.priority) {
       case 0:
          return record ? <span>Baja</span> : null
       case 1:
          return record ? <span>Media</span> : null
       case 2:
          return record ? <span>Alta</span> : null
       default:
          return <span>Baja</span>
    }
 }

 PriorityReturner.defaultProps = {
    label: "Prioridad",
 }
