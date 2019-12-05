import firebase, { firestore } from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyALSy7jyVg89X37WD0rZlNpgHA0wH7bp1E',
    authDomain: 'book-ms.firebaseapp.com',
    databaseURL: 'https://book-ms.firebaseio.com',
    projectId: 'book-ms',
    storageBucket: 'book-ms.appspot.com',
    messagingSenderId: '543988506059',
    appId: '1:543988506059:web:bd9d52f7128f8e47cd2a4e'
  })
}

export default firebase

const db = firestore()
export { db }

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then(() => {})
}

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {})
}

export { signIn, signOut }
