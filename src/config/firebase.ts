import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { store } from '@/store/store'

const firebaseConfig = {
  apiKey: `${process.env.VUE_APP_Api_Key}`,
  authDomain: process.env.VUE_APP_AuthDomain,
  databaseURL: process.env.VUE_APP_DatabaseURL,
  projectId: `${process.env.VUE_APP_ProjectId}`,
  storageBucket: process.env.VUE_APP_StorageBucket,
  messagingSenderId: process.env.VUE_APP_MessagingSenderId,
  appId: process.env.VUE_APP_AppId,
  measurementId: process.env.VUE_APP_MeasurementId,
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('userModule/FETCH_USER', user)
  }
})

export { db, auth, firebase }
