import { useEffect, useState } from 'react'
import { getDatabase, onValue, ref, set } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'src/config/firebase'
import { useAppDispatch } from '..'
import { setUser } from './userSlice'

export const useAuth = () => {
  const [authState, setAuthState] =
    useState<{ user: any; token: any; claims: any }>()

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          console.log('User on authentication change: ', user)
          const token = await user.getIdToken()
          const idTokenResult = await user.getIdTokenResult()
          const hasuraClaim =
            idTokenResult.claims['https://hasura.io/jwt/claims']

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
              if (!data.exists) return
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
      }),
    []
  )

  const user = {
    displayName: authState?.user.displayName,
    email: authState?.user.email,
    uid: authState?.user.uid,
  }

  return { user, token: authState?.token, claims: authState?.claims }
}

export const useUserListener = () => {
  const user = useAuth()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setUser(user))
  }, [dispatch, user])
}
