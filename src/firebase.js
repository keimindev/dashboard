import firebase from "firebase/app";
import "firebase/firestore"


const firebaseConfig = {
        apiKey: "AIzaSyCt3qm1hdVs0Z3kp5UJr0TWYLQkmrnpQtU",
        authDomain: "board-9ea9c.firebaseapp.com",
        projectId: "board-9ea9c",
        storageBucket: "board-9ea9c.appspot.com",
        messagingSenderId: "502435796985",
        appId: "1:502435796985:web:a0ddab10b807723c348f28"
}

export default firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const dbService = firebase.firestore()