import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGhykIDgMmGxH8hinPI9plg0rNDtaOpzA",
    authDomain: "firechat-ff6aa.firebaseapp.com",
    projectId: "firechat-ff6aa",
    storageBucket: "firechat-ff6aa.appspot.com",
    messagingSenderId: "238527339812",
    appId: "1:238527339812:web:45bdec6fe3e145f371a7b1",
    measurementId: "G-2LGD693VEZ"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }