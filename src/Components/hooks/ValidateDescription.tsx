export const validateDescription = (value: string) => {
    if (value && value.length > 500) {
       return "Descripción debe de ser máximo 500 caracteres"
    }
    return undefined
 }
