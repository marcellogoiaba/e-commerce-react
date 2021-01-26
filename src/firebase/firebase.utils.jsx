import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { initialize } from 'workbox-google-analytics';

const config  = {
    apiKey: "AIzaSyDHjjsLwSpx6cAYnWdIROOtmeXCaz-0A-8",
    authDomain: "crown-db-1f8fe.firebaseapp.com",
    projectId: "crown-db-1f8fe",
    storageBucket: "crown-db-1f8fe.appspot.com",
    messagingSenderId: "393788786382",
    appId: "1:393788786382:web:b1395cf17e08081fe8729f",
    measurementId: "G-18LG0XXBSY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;