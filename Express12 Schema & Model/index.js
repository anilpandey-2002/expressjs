// A schema in Mongoose is a blueprint that defines the structure of the documents in a MongoDB collection. It outlines the shape of the data, including the types of fields, default values, required fields, and validation rules.
// A model in Mongoose is a wrapper for a schema, providing an interface for interacting with the MongoDB database. It is a constructor compiled from the schema definition and serves as the tool for creating, reading, updating, and deleting documents in the database.

import express from "express";
import mongoose from "mongoose";
import "./models/stu.js";
const app = express();
const port = 3000;
import { connectdb } from "./db/connectdb.js";

// //call and Connect to MongoDB
// const DATABASE_URL = "mongodb://localhost:27017/colgdb";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectdb(DATABASE_URL);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
