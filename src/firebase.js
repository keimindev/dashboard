import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"



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

<<<<<<< HEAD
export const authService = firebase.auth()

export const dbService = firebase.firestore()
=======
export const dbService = firebase.firestore()
>>>>>>> 020efc998abf13daa109b1b2ccfef641df8475b9
