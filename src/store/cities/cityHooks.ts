import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import {
  useGetCitiesQuery,
  useSearchCitiesQuery,
  useSearchHomesByLocationQuery,
} from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import {
  selectCitySearchText,
  setPopularCities,
  selectSelectedCity,
} from './citySlice'

// export const useSearchCity = () => {
//   const dispatch = useAppDispatch()
//   const searchTerm = useAppSelector(selectCitySearchText)

//   const [{ data, fetching, error, stale }] = useSearchCitiesQuery({
//     variables: { search: searchTerm },
//   })

//   useEffect(() => {
//     dispatch(setCityOptions({ data, fetching, error, stale }))
//   }, [data, dispatch, error, fetching, stale])
// }

// export const usePopularCities = () => {
//   const dispatch = useAppDispatch()
//   const [{ data, fetching, error, stale }] = useGetCitiesQuery()

//   useEffect(() => {
//     dispatch(setPopularCities({ data, fetching, error, stale }))
//   }, [data, dispatch, error, fetching, stale])
// }
