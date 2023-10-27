import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8kUYOIcehDEi_sgnWXtRZrJF0b2eSXbk",
    authDomain: "w3school-clone-md-arwaz.firebaseapp.com",
    projectId: "w3school-clone-md-arwaz",
    storageBucket: "w3school-clone-md-arwaz.appspot.com",
    messagingSenderId: "653803360606",
    appId: "1:653803360606:web:db28442801ee800a1bffcf",
    measurementId: "G-CFE3177Z98"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;