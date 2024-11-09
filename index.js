// Import Express
const express = require('express');
const app = express();

// Define the port
const PORT = process.env.PORT || 8084;

// Create a simple route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World, Kenya!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
