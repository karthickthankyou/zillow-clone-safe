/* eslint-disable camelcase */
import { useEffect } from 'react'
import {
  //   useSearchCitiesByLocationQuery,
  //   useSearchStatesByLocationQuery,
  useSearchPropertiesDetailedQuery,
  //   useGetRegionByIdQuery,
  SortOrder,
  usePropertyQuery,
  useSearchPropertiesQuery,
} from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'

import {
  //   setCities,
  setHomes,
  //   setStates,
  //   selectCitiesFilters,
  selectHomeFilters,
  //   selectStatesFilters,
  setHomesDetailed,
} from './homeSlice'

export const useFetchHomesMap = () => {
  const dispatch = useAppDispatch()
  const filterVariables = useAppSelector(selectHomeFilters)

  const [{ data, fetching, error, stale }] = useSearchPropertiesQuery({
    variables: filterVariables,
  })

  useEffect(() => {
    dispatch(setHomes({ data, fetching, error, stale }))
  }, [data, dispatch, error, fetching, stale])
}

// export const useFetchCitiesMap = () => {
//   const dispatch = useAppDispatch()
//   const filterVariables = useAppSelector(selectCitiesFilters)

//   const [{ data, fetching, error, stale }] = useSearchCitiesByLocationQuery({
//     variables: filterVariables,
//   })

//   useEffect(() => {
//     dispatch(setCities({ data, fetching, error, stale }))
//   }, [data, dispatch, error, fetching, stale])
// }

// export const useFetchStatesMap = () => {
//   const dispatch = useAppDispatch()
//   const filterVariables = useAppSelector(selectStatesFilters)

//   const [{ data, fetching, error, stale }] = useSearchStatesByLocationQuery({
//     variables: filterVariables,
//   })

//   useEffect(() => {
//     dispatch(setStates({ data, fetching, error, stale }))
//   }, [data, dispatch, error, fetching, stale])
// }

export const useGetHighlightedHomeData = (
  highlightedHomeId: number | null | undefined
) => {
  const [highlightedHomeDetails] = usePropertyQuery({
    variables: {
      where: {
        id: highlightedHomeId || -9999,
      },
    },
    pause: !highlightedHomeId,
  })

  return highlightedHomeDetails
}

// export const useGetHighlightedRegionData = (
//   highlightedRegionId: string | null | undefined
// ) => {
//   const [highlightedRegionDetails] = useGetRegionByIdQuery({
//     variables: {
//       id: highlightedRegionId || 'not-found',
//     },
//     pause: !highlightedRegionId,
//   })
//   return highlightedRegionDetails
// }

export const useHomesDetailed = () => {
  const variables = useAppSelector(selectHomeFilters)
  const [{ data, fetching, error, stale }] = useSearchPropertiesDetailedQuery({
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
