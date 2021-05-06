import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import { seedDatabase } from '../seed'; We don't have to run this twice


const config = {
    apiKey: "AIzaSyBwBVzNqUyR12jsaPFHpeuRqIHxRJxWyro",
    authDomain: "insta-like-e3c70.firebaseapp.com",
    projectId: "insta-like-e3c70",
    storageBucket: "insta-like-e3c70.appspot.com",
    messagingSenderId: "904855237024",
    appId: "1:904855237024:web:cc3a1b7719f8b0e188f4c5"

};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };