/* eslint-disable camelcase */
import { useEffect } from 'react'
import {
  useGetHomeByIdQuery,
  useSearchHomesByLocationQuery,
  useSearchHomesByLocationDetailedQuery,
  useGetRegionByIdQuery,
  SortOrder,
} from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'

import { setHomes, selectHomeFilters, setHomesDetailed } from './homeSlice'

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

export const useGetHighlightedHomeData = (
  highlightedHomeId: number | null | undefined
) => {
  const [highlightedHomeDetails] = useGetHomeByIdQuery({
    variables: {
      where: {
        id: highlightedHomeId || -9999,
      },
    },
    pause: !highlightedHomeId,
  })

  return highlightedHomeDetails
}

export const useGetHighlightedRegionData = (
  highlightedRegionId: number | null | undefined
) => {
  const [highlightedRegionDetails] = useGetRegionByIdQuery({
    variables: {
      where: {
        id: highlightedRegionId || -99,
      },
    },
    pause: !highlightedRegionId,
  })
  return highlightedRegionDetails
}

export const useHomesDetailed = () => {
  const variables = useAppSelector(selectHomeFilters)
  const [{ data, fetching, error, stale }] =
    useSearchHomesByLocationDetailedQuery({
      variables: {
        ...variables,
        orderBy: {
          plan: SortOrder.Desc,
        },
      },
    })

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setHomesDetailed({ data, fetching, error, stale }))
  }, [data, dispatch, error, fetching, stale])
}
