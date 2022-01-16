import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA-geRxdk1SOwNsDZ0zZNUvOxxvyD6yZrc',
  authDomain: 'ultimate-cra-boilerplate.firebaseapp.com',
  projectId: 'ultimate-cra-boilerplate',
  storageBucket: 'ultimate-cra-boilerplate.appspot.com',
  messagingSenderId: '1006590721329',
  appId: '1:1006590721329:web:8f2ab4d76166dd15f08410',
  measurementId: 'G-PT42MDEJ9T',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

export const collections = {
  // Example
  // USERS: 'users',
}
