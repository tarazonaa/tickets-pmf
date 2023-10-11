export const validateClosing = (value: string) => {
    if (value && value.length > 250) {
       4
       return "Comentario de cierre debe de ser máximo 250 caracteres"
    }
    return undefined
 }