export interface TicketRecord {
    title: string
    categoryId: string
    subcategoryIndex: number
    priority: number
    assignee: string
    description: string
    status: number
    createdAt: string
    id: number
    closedAt?: string
    classroomId: number
    reportedBy?: string
 }