// src/firebase.js
import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyBn0dT2V6oUfA08ULeyL693OyBI4xR0WfQ",
    authDomain: "numerology3rdtime.firebaseapp.com",
    databaseURL: "https://numerology3rdtime.firebaseio.com",
    projectId: "numerology3rdtime",
    storageBucket: "",
    messagingSenderId: "183619836754"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();
const db = firebase.database();


export {
  db,

  auth,
};
export default firebase;