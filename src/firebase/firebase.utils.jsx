import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { initialize } from 'workbox-google-analytics';

const config = {
  apiKey: "AIzaSyDHjjsLwSpx6cAYnWdIROOtmeXCaz-0A-8",
  authDomain: "crown-db-1f8fe.firebaseapp.com",
  projectId: "crown-db-1f8fe",
  storageBucket: "crown-db-1f8fe.appspot.com",
  messagingSenderId: "393788786382",
  appId: "1:393788786382:web:b1395cf17e08081fe8729f",
  measurementId: "G-18LG0XXBSY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        createdAt,
        email,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;