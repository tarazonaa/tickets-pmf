export interface ClassroomTicketInfo {
   _id: string[]
   count: number
}

export interface ActiveTicket {
   _id: string
   title: string
   categoryId: string
   subcategoryIndex: number
   priority: number
   status: number
   description: string
   createdAt: string
   id: number
   closedAt?: string
   assignee: string
   classroomId: number
   reportedBy?: string
}


export interface ReportData {
   name: string
   mostTicketsClassroom: ClassroomTicketInfo[]
   leastTicketsClassroom: ClassroomTicketInfo[]
   avgClosureTime: null | number
   activeTickets: ActiveTicket[]
   newTickets: [_id: number, newTickets: number]
   closedTickets: [_id: number, closedTickets: number]
   id: number
}
