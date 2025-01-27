// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;  // Or another port if needed
const cors = require('cors');
app.use(cors()); // Allow all origins (you can restrict later for security)

// Middleware to parse JSON requests
app.use(bodyParser.json());

// https://a3f4-103-247-52-27.ngrok-free.app

// Test endpoint to ensure the server is running
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/webhooks/instagram', (req, res) => {
    const verifyToken = "BulBul"; // Use the same token you set in the Instagram Dashboard
    
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
  
    if (mode === 'subscribe' && token === verifyToken) {
      console.log("Webhook verified successfully!");
      res.status(200).send(challenge);
    } else {
      res.status(403).send('Verification failed');
    }
  });

// Set up a route for the Instagram webhook
app.post('/webhooks/instagram', (req, res) => {
  console.log('Webhook received: ', req.body);
  res.status(200).send('Webhook received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
