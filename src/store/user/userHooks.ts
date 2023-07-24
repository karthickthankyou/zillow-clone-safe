import { useEffect, useState } from 'react'
import { getDatabase, onValue, ref } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'src/config/firebase'
import { useAppDispatch, useAppSelector } from '..'
import { Claims, resetUser, selectUid, setClaims, setUser } from './userSlice'

const db = getDatabase()

export const useUserListener = () => {
  const dispatch = useAppDispatch()

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          dispatch(resetUser())
          return
        }

        dispatch(
          setUser({
            displayName: user?.displayName || null,
            uid: user?.uid || null,
            email: user?.email || null,
          })
        )

        const metadataRef = ref(db, `metadata/${user.uid}/refreshTime`)
        onValue(metadataRef, async (data) => {
          if (!data.exists) return

          await user.getIdToken(true)
          const idTokenResult = await user.getIdTokenResult()
          const hasuraClaim = idTokenResult.claims[
            'https://hasura.io/jwt/claims'
          ] as Claims

          dispatch(setClaims(hasuraClaim))
        })
      }),
    [dispatch]
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
