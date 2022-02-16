import { useEffect, useState } from 'react'
import { debounceTime, map, Subject, tap } from 'rxjs'
import {
  useSearchHomesByLocationDetailedQuery,
  useSearchHomesByLocationQuery,
} from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import { selectSelectedCity } from '../cities/citySlice'

export const useHomesMap = () => {
  const { ne = [0, 0], sw = [0, 0] } = useAppSelector(selectSelectedCity)
  const dispatch = useAppDispatch()
  const [{ data, fetching, error, stale }] = useSearchHomesByLocationQuery({
    variables: {
      where: {
        lat: { _gt: ne[1], _lt: sw[1] },
        lng: { _gt: ne[0], _lt: sw[0] },
      },
    },
  })
  return { data, dispatch, error, fetching, stale }
}

export const useHomesList = () => {
  const { ne = [0, 0], sw = [0, 0] } = useAppSelector(selectSelectedCity)

  const whereConditions = {
    lat: {
      _gt: ne[1],
      _lt: sw[1],
    },
    lng: {
      _gt: ne[0],
      _lt: sw[0],
    },
  }
  // if (beds) whereConditions['beds'] = { _gte: beds }
  // if (bath) whereConditions['bath'] = { _gte: bath }
  // if (sqft) whereConditions['sqft'] = { _gte: sqft[0], _lte: sqft[1] }
  // if (price) whereConditions['price'] = { _gte: price[0], _lte: price[1] }
  // if (yearBuilt)
  //   whereConditions['yearBuilt'] = { _gte: yearBuilt[0], _lte: yearBuilt[1] }

  const [{ data, fetching, error, stale }] =
    useSearchHomesByLocationDetailedQuery({
      variables: {
        offset: 0,
        limit: 10,
        where: whereConditions,
      },
    })
  return { data, fetching, error, stale }
}
