import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import env from "react-dotenv";

//import { seedDatabase } from '../seed'; //We don't have to run this twice


const config = {
    apiKey: env.REACT_APP_APIKEY,
    authDomain: env.REACT_APP_AUTH,
    projectId: env.REACT_APP_PROJECTID,
    storageBucket: env.REACT_APP_STORAGE,
    messagingSenderId: env.REACT_APP_MESSAGING,
    appId: env.REACT_APP_APPID

};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };