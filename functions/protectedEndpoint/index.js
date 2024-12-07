// functions/protectedEndpoint/index.js

const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp();
}

const protectedEndpoint = functions.https.onRequest(async (req, res) => {
  // Get the ID token passed in the Authorization header
  const idToken = req.headers.authorization
    ? req.headers.authorization.split("Bearer ")[1]
    : null;

  if (!idToken) {
    return res.status(401).send("Unauthorized");
  }

  try {
    // Verify the ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    // Access granted
    console.log(`User ${uid} accessed protected endpoint`);
    res.status(200).send(`Hello, user ${uid}`);
  } catch (error) {
    console.error("Error while verifying Firebase ID token:", error);
    res.status(401).send("Unauthorized");
  }
});

module.exports = {
  protectedEndpoint,
};
