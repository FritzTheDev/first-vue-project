import Firebase from 'firebase/app'
import 'firebase/firestore';
const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDHz6VHvkLjr4S44qfpjdsaJv94zUwI-is",
  authDomain: "loaded-a689b.firebaseapp.com",
  databaseURL: "https://loaded-a689b.firebaseio.com",
  projectId: "loaded-a689b",
  storageBucket: "loaded-a689b.appspot.com",
  messagingSenderId: "339918962089"
})

export const db = firebaseApp.firestore();