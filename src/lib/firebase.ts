import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAI95p-yl6U-kavucE-V81QkUL6uRSGRxE',
  authDomain: 'zillow-clone-karthick.firebaseapp.com',
  projectId: 'zillow-clone-karthick',
  storageBucket: 'zillow-clone-karthick.appspot.com',
  messagingSenderId: '654953459891',
  appId: '1:654953459891:web:388170cdf0de9c4b7ac0c6',
  measurementId: 'G-T62TR0KDWT',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)
// export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

export const collections = {
  // Example
  // USERS: 'users',
}

export const createAccount = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential
      console.log(user)

      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(error)

      // ..
    })
}

export const getCurrentUser = async () => {
  const token = await auth.currentUser?.getIdToken(true)
  console.log(auth.currentUser, token)
}

export const logout = () => {
  auth.signOut()
}

export const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const { user } = userCredential
      console.log(user)
      const token = await auth.currentUser?.getIdToken(true)
      console.log('token', token)

      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(error)
    })
}

export const googleSignin = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      // The signed-in user info.
      console.log('token: ', token)
      const { user } = result
      const tokenUpdated = await auth.currentUser?.getIdToken(true)
      console.log('token updated: ', tokenUpdated)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const { email } = error
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
    })
}
