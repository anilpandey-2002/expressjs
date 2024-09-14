// Create or insert

import express from "express";
import mongoose from "mongoose";
import "./models/stu.js";
const app = express();
const port = 3000;
import { connectdb } from "./db/connectdb.js";
import { createDoc } from "./models/stu.js";

// //call and Connect to MongoDB
// const DATABASE_URL = "mongodb://localhost:27017/colgdb";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectdb(DATABASE_URL);
// create and save document
// createDoc();
createDoc("kamal", 20, 1234.44, true, false, [{ value: "my bro" }]); //passing dynamic data

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
