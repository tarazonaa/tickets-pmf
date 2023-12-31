export interface ReportRecord {
   id: number
   name: string
   mostTicketsClassroom: object
   leastTicketsClassroom: object
   avgClosureTime: number | null
   activeTickets: Array<object>
   newTickets: Array<object>
   closedTickets: Array<object>
}
