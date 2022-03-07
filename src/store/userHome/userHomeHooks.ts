import { useEffect } from 'react'

import { useGetWishlistedHomesQuery } from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import { selectUser } from '../user'
import { setWishlistedHomes } from './userHomeSlice'

export const useGetWishlisted = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const [{ data, fetching, stale, error }] = useGetWishlistedHomesQuery({
    variables: {
      uid: user.data.uid || '',
    },
    pause: !user.data.uid,
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
