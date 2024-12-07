// src/api.js
import { auth } from './firebase';

export const callProtectedEndpoint = async () => {
  const user = auth.currentUser;
  if (user) {
    const idToken = await user.getIdToken();
    try {
      const response = await fetch(
        'https://us-central1-oas-project-253f8.cloudfunctions.net/protectedEndpoint',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      const data = await response.text();
      console.log('Protected data:', data);
    } catch (error) {
      console.error('Error calling protected endpoint:', error);
    }
  } else {
    console.error('No authenticated user.');
  }
};
