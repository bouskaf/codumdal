import firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDTXtJS18iEiMHh2jTChAMtdvwBFseoVgI",
    authDomain: "codumdal-a40a5.firebaseapp.com",
    databaseURL: "https://codumdal-a40a5.firebaseio.com",
    projectId: "codumdal-a40a5",
    storageBucket: "codumdal-a40a5.appspot.com",
    messagingSenderId: "537219507651",
    appId: "1:537219507651:web:c01bad9b94d09651da8976"
};
firebase.initializeApp(config);

export default firebase;