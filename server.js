// app.js
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// Create a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express is working!");
});
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/submit", (req, res) => {
  res.send("Form submitted!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
