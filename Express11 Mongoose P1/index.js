// Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction over the MongoDB native driver, making it easier to work with MongoDB in a structured way. Here’s a breakdown of key concepts and features of Mongoose:
// const express = require("express");
// const mongoose = require("mongoose");
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;
import { connectdb } from "./db/connectdb.js";
// Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost:27017/schooldb")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDB:", err));

// //call and Connect to MongoDB
// const DATABASE_URL = "mongodb://localhost:27017/schooldb";
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";

connectdb(DATABASE_URL);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
