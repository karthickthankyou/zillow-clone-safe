import dateFormat from 'dateformat'

export const formatDate = (date: string) => dateFormat(date, 'mmm d yyyy HH:MM')
