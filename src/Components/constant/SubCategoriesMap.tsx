export const getSubcategories = (categories: {id: string; name: string; subcategories: string[]}[]) => {
    const subcategories: {
       index: number
       name: string
       parentCategoryId: string
    }[] = []
    if (categories) {
       categories.forEach((category: {id: string; name: string; subcategories: string[]}) => {
          category?.subcategories.forEach((subcategory: string, index: number) => {
             subcategories.push({
                parentCategoryId: category.id,
                index: index,
                name: subcategory,
             })
          })
       })
    }
    return subcategories
 }
