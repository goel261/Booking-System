import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbXPRttDcLtzboyS-h2Bjt5xxa_eSCoXo",
  authDomain: "booking-b56cd.firebaseapp.com",
  projectId: "booking-b56cd",
  storageBucket: "booking-b56cd.appspot.com",
  messagingSenderId: "18174470153",
  appId: "1:18174470153:web:1fd019657a7896c06030d8",
  measurementId: "G-X0F3J3X306"
};

// eslint-disable-next-line
const firebaseApp=firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();

export {db,auth};
export default firebase;