import { useEffect } from 'react'
import {
  useSearchPropertiesDetailedQuery,
  SortOrder,
  usePropertyQuery,
  useSearchPropertiesQuery,
  useLocationStatQuery,
  useLocationStatsQuery,
  LocationStatsType,
} from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'

import {
  setHomes,
  selectHomeFilters,
  setHomesDetailed,
  selectStatesFilters,
  setStates,
  selectCitiesFilters,
  setCities,
} from './homeSlice'

export const useFetchHomesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectHomeFilters)

  const { data, loading, error } = useSearchPropertiesQuery({
    variables: filterVariables,
  })

  useEffect(() => {
    dispatch(setHomes({ data, loading, error }))
  }, [data, dispatch, error, loading])
}

export const useFetchCitiesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectCitiesFilters)

  const { data, loading, error } = useLocationStatsQuery({
    variables: filterVariables,
  })

  useEffect(() => {
    dispatch(setCities({ data, loading, error }))
  }, [data, dispatch, error, loading])
}

export const useFetchStatesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectStatesFilters)

  const { data, loading, error } = useLocationStatsQuery({
    variables: { ...filterVariables, where: { type: LocationStatsType.State } },
  })

  useEffect(() => {
    dispatch(setStates({ data, loading, error }))
  }, [data, dispatch, error, loading])
}

export const useGetHighlightedHomeData = (
  highlightedHomeId: number | null | undefined
) => {
  const { data, loading, error } = usePropertyQuery({
    variables: {
      where: {
        id: highlightedHomeId || -9999,
      },
    },
  })

  return { data, loading, error }
}

export const useGetHighlightedRegionData = (
  highlightedRegionId: number | null | undefined
) => {
  const { data, loading, error } = useLocationStatQuery({
    variables: {
      where: {
        id: highlightedRegionId,
      },
    },
  })
  return { data, loading, error }
}

export const useHomesDetailed = () => {
  const variables = useAppSelector(selectHomeFilters)

  const { data, loading, error } = useSearchPropertiesDetailedQuery({
    variables: {
      ...variables,
      orderBy: {
        plan: SortOrder.Desc,
      },
    },
  })

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setHomesDetailed({ data, loading, error }))
  }, [data, dispatch, error, loading])
}
