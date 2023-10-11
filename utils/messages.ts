 

 
export const maxLength = (field: string, num: number) => {
    return { maxLength: { value: num, message: `${field} - максимум ${num} знаков` } } as any
}
export const required = (field: string) => {
    return { required: `${field} - обязательное поле` }  as any
}
export const minLength = (field: string, num: number) => {
    return {
        required: `${field} - обязательное поле`,
        minLength: `${field} - минимум ${num} знаков`  
    }  as any
}







