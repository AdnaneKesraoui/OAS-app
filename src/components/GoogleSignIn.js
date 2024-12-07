// src/components/GoogleSignIn.js
import React from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleSignIn = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
      // Redirect or update UI as needed
    } catch (error) {
      console.error('Error with Google sign-in:', error);
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign in with Google</button>;
};

export default GoogleSignIn;
