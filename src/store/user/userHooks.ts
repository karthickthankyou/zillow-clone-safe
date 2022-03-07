import { useEffect } from 'react'
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
