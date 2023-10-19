import React, {PureComponent} from "react"
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts"
import {getTop5ClassroomsWithMostIncidents} from "./getTop5" // adjust the import path
import {PMFThemeDark} from "../../Custom/theme/PMFTheme-Dark" // adjust the import path

const Chart: React.FC = () => {
   const top5Classrooms = getTop5ClassroomsWithMostIncidents()

   return (
      <ResponsiveContainer width="100%" height="90%">
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
            <Tooltip contentStyle={PMFThemeDark.tooltip.contentStyle}/>
            <Bar dataKey="count" fill="#008170" label={{position: "top"}} />
         </BarChart>
      </ResponsiveContainer>
   )
}
class Top5ClassroomsChart extends PureComponent {
   render() {
      return <Chart />
   }
}

export default Top5ClassroomsChart
