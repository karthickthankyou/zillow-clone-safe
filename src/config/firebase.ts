import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // apiKey: 'AIzaSyAI95p-yl6U-kavucE-V81QkUL6uRSGRxE',
  // authDomain: 'zillow-clone-karthick.firebaseapp.com',
  // projectId: 'zillow-clone-karthick',
  // storageBucket: 'zillow-clone-karthick.appspot.com',
  // messagingSenderId: '654953459891',
  // appId: '1:654953459891:web:388170cdf0de9c4b7ac0c6',
  // measurementId: 'G-T62TR0KDWT',

  apiKey: 'AIzaSyDiENWwMSb_bO_I-FiwM7Jgl3ktHNQ8R4w',
  authDomain: 'karthick-zillow.firebaseapp.com',
  projectId: 'karthick-zillow',
  storageBucket: 'karthick-zillow.appspot.com',
  messagingSenderId: '719287085853',
  appId: '1:719287085853:web:7e2ceffc188ba9a4eb0ff4',
  measurementId: 'G-PDFE7C0BQ6',
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
