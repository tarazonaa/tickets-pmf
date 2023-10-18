import React from "react"
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts"
import {getTop5ClassroomsWithMostIncidents} from "./getTop5" // adjust the import path

const Top5ClassroomsChart: React.FC = () => {
   const top5Classrooms = getTop5ClassroomsWithMostIncidents()

   return (
      <ResponsiveContainer width="100%" height="100%">
         <BarChart
            width={600}
            height={300}
            data={top5Classrooms}
            margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="classroomId" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#008170" label={{position: "top"}} />
         </BarChart>
      </ResponsiveContainer>
   )
}

export default Top5ClassroomsChart
