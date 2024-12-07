// functions/apiScraper/index.js

const functions = require('firebase-functions');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
// const authMiddleware = require('../utils/authMiddleware');
// const rateLimiter = require('../utils/rateLimiter');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Apply middleware (uncomment if needed)
// app.use(rateLimiter);
// app.use(authMiddleware);

// API Scraper Endpoint
app.post('/', async (req, res) => {
  const { url } = req.body;

  // Input Validation
  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: "Invalid URL: URL must be a non-empty string." });
  }

  try {
    // Fetch the HTML content of the provided URL
    const response = await axios.get(url);

    // Send the HTML content as the response
    res.set('Content-Type', 'text/html');
    res.status(200).send(response.data);
  } catch (error) {
    console.error('Error fetching the page:', error.message);

    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      return res.status(504).json({ error: 'Gateway Timeout: The request took too long to complete.' });
    }

    if (error.response) {
      if (error.response.status === 404) {
        return res.status(404).json({ error: 'Not Found: The requested URL was not found.' });
      }
      return res.status(error.response.status).json({ error: `Error fetching the URL: ${error.response.statusText}` });
    }

    res.status(500).json({ error: 'Internal Server Error: Unable to process the request.', details: error.message });
  }
});

// Export the Cloud Function
exports.apiScraper = functions.https.onRequest(app);
