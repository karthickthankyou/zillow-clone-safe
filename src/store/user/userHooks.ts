import { useEffect, useMemo, useState } from 'react'
import { getDatabase, onValue, ref } from 'firebase/database'
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'
import { auth } from 'src/config/firebase'
import { useAppDispatch, useAppSelector } from '..'
import { selectUid, setUser } from './userSlice'

export const useUserListener = () => {
  const [authState, setAuthState] =
    useState<{ user: any; token: any; claims: any }>()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken()
        console.log('Token: ', token)
        const idTokenResult = await user.getIdTokenResult()
        const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims']

        if (hasuraClaim) {
          setAuthState({ user, token, claims: hasuraClaim })
        } else {
          // Check if refresh is required.
          const db = getDatabase()
          /** Should I set refresh time in realtime db? */
          // set(ref(db, `metadata/${user.uid}/refreshTime`))
          const metadataRef = ref(db, `metadata/${user.uid}/refreshTime`)

          onValue(metadataRef, async (snapshot) => {
            const data = snapshot.val()
            if (!data?.exists) return
            const tokenUpdated = await user.getIdToken(true)
            const hasuraClaimUpdated =
              idTokenResult.claims['https://hasura.io/jwt/claims']
            setAuthState({
              user,
              token: tokenUpdated,
              claims: hasuraClaimUpdated,
            })
          })
        }
      } else {
        setAuthState({ user: null, token: null, claims: null })
      }
    })

    onIdTokenChanged(auth, (user) => {
      if (user) {
        // User is signed in or token was refreshed.
        console.log('----------- Token refreshed: ', user)
      }
    })
  }, [])

  const user = useMemo(
    () => ({
      displayName: authState?.user?.displayName,
      email: authState?.user?.email,
      uid: authState?.user?.uid,
    }),
    [authState]
  )

  const claims = authState?.claims
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setUser({ user, claims }))
  }, [claims, dispatch, user])
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
  const t0 = performance.now()
  const token = await auth.currentUser?.getIdToken(false)

  const t1 = performance.now()
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`)

  return token
}
