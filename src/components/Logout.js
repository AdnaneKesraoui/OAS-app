import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Handle successful logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
