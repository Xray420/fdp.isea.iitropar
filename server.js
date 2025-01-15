// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;  // Use Heroku's PORT or fallback to 3000 locally

// Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static('public'));

// Define a simple route to check if the server is working
app.get('/', (req, res) => {
    res.send('Hello, Backend is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
