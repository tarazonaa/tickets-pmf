import { tickets2 } from '../Context/RandomTickets'; // adjust the import path

export const countCategories = () => {
    const categoryCounts: Record<string, number> = {};

    tickets2.forEach(ticket => {
        if (categoryCounts[ticket.categoryId]) {
            categoryCounts[ticket.categoryId]++;
        } else {
            categoryCounts[ticket.categoryId] = 1;
        }
    });

    return categoryCounts;
};
