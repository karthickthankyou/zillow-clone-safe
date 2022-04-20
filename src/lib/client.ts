import { createClient } from 'urql'
import dateFormat from 'dateformat'

const HASURA_ADMIN = process.env.HASURA_ADMIN || ''

export const urqlAdminClient = createClient({
  url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
  fetchOptions: {
    headers: {
      'x-hasura-admin-secret': HASURA_ADMIN,
    },
  },
})

export const formatDate = (date: string) => dateFormat(date, 'mmm d yyyy HH:MM')
