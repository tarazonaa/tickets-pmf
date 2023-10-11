import React from 'react'
import { useRecordContext } from 'react-admin'
import { TicketRecord } from '../Context/TicketRecord'

export const StatusReturner = () => {
    const record = useRecordContext<TicketRecord>()
    switch (record.status) {
       case 0:
          return record ? <span>Abierto</span> : null
       case 1:
          return record ? <span>En proceso</span> : null
       case 2:
          return record ? <span>Cerrado</span> : null
       default:
          return <span>Abierto</span>
    }
 }
 StatusReturner.defaultProps = {
    label: "Estatus",
 }