const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// API endpoint to receive logs
app.post("/api/logs", (req, res) => {
  const { type, message } = req.body;

  if (!type || !message) {
    return res.status(400).send("Invalid log format");
  }

  const logMessage = `[${new Date().toISOString()}] [${type.toUpperCase()}] ${message}`;

  // Print the log message to the console (stdout)
  console.log(logMessage);

  // Send a response to the client
  res.status(200).send("Log received and printed to stdout");
});

// Start the server
app.listen(port, () => {
  console.log(`Log server running on port ${port}`);
});
