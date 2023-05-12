
import './commands'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import { attachCustomCommands } from 'cypress-firebase'

const fbConfig = {
    apiKey: "AIzaSyAK5sF26iNGOYBKXbUFUoYQVZXnVAf_GH8",
    authDomain: "tanzania-370714.firebaseapp.com",
    projectId: "tanzania-370714",
    storageBucket: "tanzania-370714.appspot.com",
    messagingSenderId: "26450789751",
    appId: "1:26450789751:web:88ab99ab7386aac7658d72",
    measurementId: "G-ETB6MCES2V"

}

firebase.initializeApp(fbConfig);
// eslint-disable-next-line no-undef
attachCustomCommands({Cypress,cy,firebase})