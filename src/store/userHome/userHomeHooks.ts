import { useEffect } from 'react'

import { useMyHomesQuery } from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import { selectUid } from '../user/userSlice'
import { setWishlistedHomes } from './userHomeSlice'

export const useGetWishlisted = () => {
  const uid = useAppSelector(selectUid)
  const dispatch = useAppDispatch()

  const { data, loading, error } = useMyHomesQuery({
    variables: {
      where: {
        buyerUid: { equals: uid! },
      },
    },
  })

  useEffect(() => {
    dispatch(
      setWishlistedHomes({
        data,
        loading,
        error,
      })
    )
  }, [data, dispatch, error, loading])
}
