// Importing the express module
const express = require("express");
// import express from "express";

// Creating an instance of an Express app
const app = express();

// Define a port for the server to listen on
const PORT = 3000;

// Define a basic route that sends a response when accessed
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
