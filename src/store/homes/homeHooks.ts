import { useEffect } from 'react'
import { useSearchHomesByLocationQuery } from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import { selectBounds } from '../cities/citySlice'
import { setHomesMap } from './homeSlice'

export const useHomes = () => {
  const [ne, sw] = useAppSelector(selectBounds)
  const dispatch = useAppDispatch()
  const [homes] = useSearchHomesByLocationQuery({
    variables: {
      where: {
        lat: { _gt: ne[1], _lt: sw[1] },
        lng: { _gt: ne[0], _lt: sw[0] },
      },
    },
  })
  useEffect(() => {
    dispatch(setHomesMap(homes))
  }, [dispatch, homes])
}
