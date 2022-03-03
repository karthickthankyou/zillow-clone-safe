import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { MapRef } from 'react-map-gl'
import { catchError, debounceTime, EMPTY, map, Subject } from 'rxjs'

import { useSearchHomesByLocationQuery } from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'

import { DEBOUNCE_DELAY } from '../static'
import { selectFilters } from './citySlice'

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
