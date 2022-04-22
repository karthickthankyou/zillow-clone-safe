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

  apiKey: 'AIzaSyDGX9FsAyhP3FZMPK9-LG_1OfXWMWmP_xo',
  authDomain: 'zillow-clone-f66d8.firebaseapp.com',
  databaseURL: 'https://zillow-clone-f66d8-default-rtdb.firebaseio.com',
  projectId: 'zillow-clone-f66d8',
  storageBucket: 'zillow-clone-f66d8.appspot.com',
  messagingSenderId: '846163824702',
  appId: '1:846163824702:web:f97db11bd287944035416f',
  measurementId: 'G-BZETPKMFRB',
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
