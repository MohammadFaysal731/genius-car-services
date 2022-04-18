// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjJVDyS899SNZUNXVGtC7iK4k3QFIww1Q",
    authDomain: "genius-car-services-e0ae3.firebaseapp.com",
    projectId: "genius-car-services-e0ae3",
    storageBucket: "genius-car-services-e0ae3.appspot.com",
    messagingSenderId: "920710907378",
    appId: "1:920710907378:web:54a030c709e7bd53f1576b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;