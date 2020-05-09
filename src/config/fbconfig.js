import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBm2Lvb_ruZIhrx0xh1c16e-5jYIB-KbB8",
    authDomain: "aptistamper-af4f5.firebaseapp.com",
    databaseURL: "https://aptistamper-af4f5.firebaseio.com",
    projectId: "aptistamper-af4f5",
    storageBucket: "aptistamper-af4f5.appspot.com",
    messagingSenderId: "604121418983",
    appId: "1:604121418983:web:4bd9ecaf6a1d2fffc52642",
    measurementId: "G-QSJ7G2X8H3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  // firebase.firestore().settings({timestampsInSnapshots: true})
  firebase.firestore();

  export default firebase;