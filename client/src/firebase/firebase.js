// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDd5e97X5tfHiyTxNLYc2oB7o8ktworkK0",
    authDomain: "ecommerce-bdb54.firebaseapp.com",
    projectId: "ecommerce-bdb54",
    storageBucket: "ecommerce-bdb54.appspot.com",
    messagingSenderId: "63874916681",
    appId: "1:63874916681:web:50cbe0f9ca3d1fef5cba98",
    measurementId: "G-CMQ9NHPCL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export const db = getFireStore(app)
