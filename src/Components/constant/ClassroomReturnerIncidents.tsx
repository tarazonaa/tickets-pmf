import React from "react"
import Typography from "@mui/material/Typography"
import {getClassroomsWithMostAndLeastIncidents} from "./CountClassroomIncidents" // adjust the import path
import {Box} from "@mui/material"

const ClassroomIncidentReport: React.FC = () => {
   const {mostIncidentsClassroom, leastIncidentsClassroom, maxIncidents, minIncidents} =
      getClassroomsWithMostAndLeastIncidents()

   return (
      <Box sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
         <Typography variant="h6" sx={{fontWeight: "800"}}>
            Classroom con mas Incidentes:
         </Typography>
         <Typography variant="h4">
            Id: {mostIncidentsClassroom} ({maxIncidents} incidentes)
         </Typography>
         <Typography variant="h6" sx={{fontWeight: "800"}}>
            Classroom con menos Incidentes:
         </Typography>
         <Typography variant="h4">
            Id: {leastIncidentsClassroom} ({minIncidents} incidentes)
         </Typography>
      </Box>
   )
}

export default ClassroomIncidentReport
