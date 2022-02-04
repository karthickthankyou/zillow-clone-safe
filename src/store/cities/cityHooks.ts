import { useEffect } from 'react'
import { useSearchCitiesQuery } from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import {
  setCityOptions,
  selectCitySearchText,
  selectCityOptions,
} from './citySlice'

export function useSearchCity() {
  const dispatch = useAppDispatch()
  const searchTerm = useAppSelector(selectCitySearchText)
  const cityOptions = useAppSelector(selectCityOptions)

  const [data] = useSearchCitiesQuery({
    variables: { search: searchTerm },
  })

  console.log('They are the same! ', cityOptions === data)

  useEffect(() => {
    dispatch(setCityOptions(data))
  }, [data, dispatch])
}
