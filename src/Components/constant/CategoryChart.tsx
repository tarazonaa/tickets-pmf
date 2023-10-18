import React, { PureComponent } from "react"
import {ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from "recharts"
import {countCategories} from "./CountCategories" // adjust the import path

const CategoryChart: React.FC = () => {
   const categoryCounts = countCategories()
   const data = Object.keys(categoryCounts).map((categoryId) => ({
      categoryId,
      count: categoryCounts[categoryId],
   }))

   return (
      <ResponsiveContainer width="100%" height="92%">
         <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="categoryId" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="count" stroke="#008170" fill="#008170" fillOpacity={0.6} />
         </RadarChart>
      </ResponsiveContainer>
   )
}
export default class RadarExample extends PureComponent {
    render() {
       return (
        <CategoryChart />
       )
    }
 }
