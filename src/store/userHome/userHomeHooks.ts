import { useEffect } from 'react'

import { useGetWishlistedHomesQuery } from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import { selectUid } from '../user/userSlice'
import { setWishlistedHomes } from './userHomeSlice'

export const useGetWishlisted = () => {
  const uid = useAppSelector(selectUid)
  const dispatch = useAppDispatch()

  const [{ data, fetching, stale, error }] = useGetWishlistedHomesQuery({
    variables: {
      uid: uid!,
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
