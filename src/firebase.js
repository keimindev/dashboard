import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"



const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: "board-9ea9c",
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
        appId: process.env.REACT_APP_APP_ID
}


export default firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const dbService = firebase.firestore();

export const authService = firebase.auth();