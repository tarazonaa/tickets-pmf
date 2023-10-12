import {useGetList, useRecordContext} from "react-admin"
import {TicketRecord} from "../Context/TicketRecord"
import {CategoryData} from "../Context/CategoryData"

export const SubCategoryReturner = () => {
   const record = useRecordContext<TicketRecord>()
   const {data: CatData, isLoading} = useGetList("categories")
   if (isLoading) return <span>Cargando...</span>
   const categories = CatData as CategoryData[]
   const category = categories.find((category) => {
      return category.id === record.categoryId
   })
   return <span>{category?.subcategories[record.subcategoryIndex]}</span>
}

SubCategoryReturner.defaultProps = {
   label: "Subcategoría",
}
