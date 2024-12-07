// functions/index.js

const admin = require('firebase-admin');

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp();
}

// Export Cloud Functions
exports.protectedEndpoint = require('./protectedEndpoint/index.js').protectedEndpoint;
exports.apiScraper = require('./apiScraper/index.js').apiScraper;


