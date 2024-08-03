// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
const analytics = getAnalytics(app);
