import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyC7MUSza0J76h1b3Y-bh_usH0t3bQxiS3w",
    authDomain: "bazooka-da457.firebaseapp.com",
    projectId: "bazooka-da457",
    storageBucket: "bazooka-da457.appspot.com",
    messagingSenderId: "393926549394",
    appId: "1:393926549394:web:5bcdcdfa0dc42bd734eb4b"
}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

//console.log('firebase', firebase);
export { firebase, FieldValue };