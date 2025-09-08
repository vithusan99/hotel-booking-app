import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgkInAjWJqslXEZf0omqQ5LeDNdcQYAVY",
    authDomain: "hotel-booking-app-bfba0.firebaseapp.com",
    projectId: "hotel-booking-app-bfba0",
    storageBucket: "hotel-booking-app-bfba0.firebasestorage.app",
    messagingSenderId: "304851763334",
    appId: "1:304851763334:web:35feaf0e41e6f6f1931107",
    measurementId: "G-F0X2FSYPSZ"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)