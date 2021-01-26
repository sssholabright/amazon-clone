import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmqTQjEYDd0EULu76YisQRXPstc6JxhW8",
  authDomain: "challenge-92c54.firebaseapp.com",
  databaseURL: "https://challenge-92c54.firebaseio.com",
  projectId: "challenge-92c54",
  storageBucket: "challenge-92c54.appspot.com",
  messagingSenderId: "669927757941",
  appId: "1:669927757941:web:a3f08c09f5351484a7003c",
  measurementId: "G-T17R31E8PC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
