//FIREBASE CONFIG
        // Import the functions you need from the SDKs you need
        import { initializeApp, getApps, getApp } from "/firebase/app";
        import { getFirestore } from "/firebase/firestore";
        import { getStorage } from "/firebase/storage";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
        apiKey: "AIzaSyD5GD5gYmB-mv6rn9PnlO7O2X51B7lcnak",
        authDomain: "dealerpath-46459.firebaseapp.com",
        projectId: "dealerpath-46459",
        storageBucket: "dealerpath-46459.appspot.com",
        messagingSenderId: "97319821070",
        appId: "1:97319821070:web:221ad30056403a8e30415f",
        measurementId: "G-WTRPQR2TJW"
        };

        // Initialize Firebase
        const app = !getApps().length ?
        initializeApp(firebaseConfig)
        : getApp();

        const db = getFirestore();
        const storage = getStorage();

export { app, db, storage };