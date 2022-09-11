import { initializeApp } from 'firebase/app';

import { 
    getAuth,
    signInWithEmailAndPassword
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyDr87yBag222YnfFlST_eTrlpiI9Gxb5Js",
    authDomain: "embebidos-18ed2.firebaseapp.com",
    projectId: "embebidos-18ed2",
    storageBucket: "embebidos-18ed2.appspot.com",
    messagingSenderId: "411355731261",
    appId: "1:411355731261:web:e3ec7f785fd484a6e52154"
}

const app = initializeApp(firebaseConfig);

export const sign = signInWithEmailAndPassword;
export const auth = getAuth(app);
export const db = getFirestore(app);