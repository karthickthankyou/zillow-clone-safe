import { useEffect } from 'react'
import {
  useGetHomeByIdQuery,
  useSearchHomesByLocationQuery,
  useSearchCitiesByLocationQuery,
  useSearchStatesByLocationQuery,
} from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'

import {
  selectHighlightedHomeId,
  setCities,
  setHomes,
  setStates,
  selectCitiesFilters,
  selectHomeFilters,
  selectStatesFilters,
} from './homeSlice'

export const useFetchHomesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectHomeFilters)

  const [{ data, fetching, error, stale }] = useSearchHomesByLocationQuery({
    variables: filterVariables,
  })

  useEffect(() => {
    dispatch(setHomes({ data, fetching, error, stale }))
  }, [data, dispatch, error, fetching, stale])
}

export const useFetchCitiesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectCitiesFilters)

  const [{ data, fetching, error, stale }] = useSearchCitiesByLocationQuery({
    variables: filterVariables,
  })

  useEffect(() => {
    dispatch(setCities({ data, fetching, error, stale }))
  }, [data, dispatch, error, fetching, stale])
}

export const useFetchStatesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectStatesFilters)

  const [{ data, fetching, error, stale }] = useSearchStatesByLocationQuery({
    variables: filterVariables,
  })

  useEffect(() => {
    dispatch(setStates({ data, fetching, error, stale }))
  }, [data, dispatch, error, fetching, stale])
}

export const useGetHighlightedData = () => {
  const highlightedHomeId = useAppSelector(selectHighlightedHomeId)

  const [highlightedHomeDetails] = useGetHomeByIdQuery({
    variables: {
      id: highlightedHomeId!,
    },
  })
}
