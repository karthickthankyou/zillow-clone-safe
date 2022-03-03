import { useEffect } from 'react'
import { useSearchHomesByLocationQuery } from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import { selectFilters } from '../cities/citySlice'
import { setMapResults } from './homeSlice'

export const useMapData = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectFilters)
  console.log('filterVariables ', filterVariables)
  const [mapResults] = useSearchHomesByLocationQuery({
    variables: filterVariables,
  })
  console.log('mapResults ', mapResults)

  useEffect(() => {
    if (mapResults) dispatch(setMapResults(mapResults))
  }, [dispatch, mapResults])
}
