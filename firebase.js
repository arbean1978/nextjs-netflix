// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
          apiKey: "AIzaSyC68KWASzHXvFit4LgOFPnhFs2a_u3UXdE",
          authDomain: "nextjs-netflix-ddedb.firebaseapp.com",
          projectId: "nextjs-netflix-ddedb",
          storageBucket: "nextjs-netflix-ddedb.appspot.com",
          messagingSenderId: "716634164245",
          appId: "1:716634164245:web:e36d680f6b0298efa2d21c"
        };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }