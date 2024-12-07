// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAnmRKL7rL7KyM43WZoUqhm9GXirXb8S0",
    authDomain: "oas-project-253f8.firebaseapp.com",
    projectId: "oas-project-253f8",
    storageBucket: "oas-project-253f8.firebasestorage.app",
    messagingSenderId: "996375643862",
    appId: "1:996375643862:web:05293c98732de7aa64eb77"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
