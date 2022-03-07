import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'src/config/firebase'
import { useAppDispatch } from '..'
import { setUser } from './userSlice'

export const useUserListener = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('onAuthStateChanged', user)
      if (user)
        dispatch(setUser({ uid: user.uid, displayName: user.displayName }))
      else dispatch(setUser(null))
    })
    return unsubscribe
  }, [dispatch])
}

export const useGetAuthHeader = () => {
  const [token, settoken] = useState('')

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const jwtToken = await user.getIdToken()
          settoken(jwtToken)

          // const idTokenResult = await user.getIdTokenResult()
          // const hasuraClaim =
          //   idTokenResult.claims['https://hasura.io/jwt/claims']
        } else {
          settoken('')
        }
      }),
    []
  )

  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return token ? headers : {}
}
