// src/App.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import SignUp from './components/SignUp';
import Login from './components/Login';
import GoogleSignIn from './components/GoogleSignIn';
import GitHubSignIn from './components/GitHubSignIn';
import Logout from './components/Logout';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.email || user.displayName}</h1>
          {/* Include your protected components */}
          <Logout />
        </>
      ) : (
        <>
          <SignUp />
          <Login />
          <GoogleSignIn />
          <GitHubSignIn />
        </>
      )}
    </div>
  );
}

export default App;