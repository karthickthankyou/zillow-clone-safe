import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'src/config/firebase'
import { useAppDispatch } from '..'
import { setUser } from './userSlice'

export function useUserListener() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user)
        dispatch(setUser({ uid: user.uid, displayName: user.displayName }))
      else dispatch(setUser(null))
    })
    return unsubscribe
  }, [dispatch])
}
