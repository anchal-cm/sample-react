import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAK5sF26iNGOYBKXbUFUoYQVZXnVAf_GH8",
    authDomain: "tanzania-370714.firebaseapp.com",
    projectId: "tanzania-370714",
    storageBucket: "tanzania-370714.appspot.com",
    messagingSenderId: "26450789751",
    appId: "1:26450789751:web:88ab99ab7386aac7658d72",
  };
  
// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service
export const firebaseApp = initializeApp(firebaseConfig)