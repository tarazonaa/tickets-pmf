import { countIncidentsPerClassroom } from "./CountClassroomIncidents";

export const getTop5ClassroomsWithMostIncidents = () => {
    const classroomCounts = countIncidentsPerClassroom();

    const sortedClassrooms = Object.keys(classroomCounts)
        .map((classroomId) => ({
            classroomId: Number(classroomId),
            count: classroomCounts[classroomId]
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5); // get top 5

    return sortedClassrooms;
};
