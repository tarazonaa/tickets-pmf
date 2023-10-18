import { tickets2 } from '../Context/RandomTickets'; // adjust the import path

export const countIncidentsPerClassroom = () => {
    const classroomCounts: Record<number, number> = {};

    tickets2.forEach(ticket => {
        if (classroomCounts[ticket.classroomId]) {
            classroomCounts[ticket.classroomId]++;
        } else {
            classroomCounts[ticket.classroomId] = 1;
        }
    });

    return classroomCounts;
};

export const getClassroomsWithMostAndLeastIncidents = () => {
    const classroomCounts = countIncidentsPerClassroom();

    let mostIncidentsClassroom: string | null = null;
    let leastIncidentsClassroom: string | null = null;
    let maxIncidents = -1;
    let minIncidents = Infinity;

    for (const classroomId in classroomCounts) {
        const count = classroomCounts[classroomId];

        if (count > maxIncidents) {
            maxIncidents = count;
            mostIncidentsClassroom = classroomId;
        }

        if (count < minIncidents) {
            minIncidents = count;
            leastIncidentsClassroom = classroomId;
        }
    }

    return {
        mostIncidentsClassroom,
        leastIncidentsClassroom,
        maxIncidents,
        minIncidents
    };
};
