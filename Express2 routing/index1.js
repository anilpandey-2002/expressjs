// Express.js routing is a way to define the endpoints of your web application and how it should respond to client requests. Routes define the application’s response to a specific URL pattern or request method (GET, POST, PUT, DELETE, etc.).
// get- retrieve Data
// post- insert data/create
// put- completely update data
// patch-partially ipdate data
// delete-delete data

// SYNTAX
// app.method(path,callback)
// app.method(path,[callback1,callback2],....)

const express = require("express");
const app = express();
const port = 3000;

// Define a GET route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Define a POST route
app.post("/submit", (req, res) => {
  res.send("Data received via POST!");
});

// Define a PUT route
app.put("/update", (req, res) => {
  res.send("Data updated!");
});

// Define a DELETE route
app.delete("/delete", (req, res) => {
  res.send("Data deleted!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
