import { useEffect } from 'react'

import { useUserHomesQuery } from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import { selectUid } from '../user/userSlice'
import { setWishlistedHomes } from './userHomeSlice'

export const useGetWishlisted = () => {
  const uid = useAppSelector(selectUid)
  const dispatch = useAppDispatch()

  const [{ data, fetching, stale, error }] = useUserHomesQuery({
    variables: {
      where: {
        buyerUid: { equals: uid! },
      },
    },
    pause: !uid,
  })

  useEffect(() => {
    dispatch(
      setWishlistedHomes({
        data,
        fetching,
        error,
        stale,
      })
    )
  }, [data, dispatch, error, fetching, stale])
}
