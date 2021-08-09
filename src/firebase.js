import firebase from "firebase/app";
import "firebase/firestore"


const firebaseConfig = {
        apiKey: "ur KEY",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "UR id",
        appId: ""
}

export default firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const dbService = firebase.firestore()
