// src/components/GitHubSignIn.js
import React from 'react';
import { auth } from '../firebase';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const GitHubSignIn = () => {
  const handleGitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
        await signInWithPopup(auth, provider);
      // Redirect or update UI as needed
    } catch (error) {
      console.error('Error with GitHub sign-in:', error);
    }
  };

  return <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>;
};

export default GitHubSignIn;
