import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'src/config/firebase'
import { useAppDispatch, useAppSelector } from '..'
import { selectUid, setUser } from './userSlice'

export const useUserListener = () => {
  //   useRefreshToken()
  const dispatch = useAppDispatch()
  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (!user?.uid) {
          setUser({})
          return
        }
        console.log('user', user)

        const tokenResult = await auth.currentUser?.getIdTokenResult()
        const roles = tokenResult?.claims.roles || []
        const { displayName, email, uid } = user
        dispatch(
          setUser({
            uid,
            email: email || '',
            displayName: displayName || '',
            roles,
            token: tokenResult?.token,
          })
        )
      }),
    []
  )
}

export const useGetToken = () => {
  const [token, settoken] = useState<string | null | undefined>(null)
  const uid = useAppSelector(selectUid)

  useEffect(() => {
    ;(async () => {
      const tokenId = await auth.currentUser?.getIdToken(false)
      settoken(tokenId)
    })()
  }, [uid])
  return token
}

export const getToken = async () => {
  // const t0 = performance.now()
  const token = await auth.currentUser?.getIdToken(false)

  // const t1 = performance.now()
  // console.log(`Call to doSomething took ${t1 - t0} milliseconds.`)

  return token
}
