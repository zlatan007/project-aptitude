import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDMX2CVWnEJPRLUxtdIbIOU_X_JfRJrsM0",
  authDomain: "project-aptistamper.firebaseapp.com",
  databaseURL: "https://project-aptistamper.firebaseio.com",
  projectId: "project-aptistamper",
  storageBucket: "project-aptistamper.appspot.com",
  messagingSenderId: "705338712607",
  appId: "1:705338712607:web:4dbac235158b27180cab2a",
  measurementId: "G-XSPSB2CYD4"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;