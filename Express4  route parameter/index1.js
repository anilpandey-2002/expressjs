// Query strings in Express are used to pass data to routes via the URL in the form of key-value pairs. They appear after the ? symbol in the URL and are separated by & if there are multiple parameters. Query strings are useful for filtering, sorting, pagination, or sending other types of data without modifying the route path.

// const express = require("express");
import express from "express";

const app = express();
const port = 3000;

// Route that reads query strings
app.get("/search", (req, res) => {
  const { term, page } = req.query; // Access query strings using req.query
  console.log(req.query);
  res.send(`Search Term: ${term}, Page: ${page}`);
});
// use like this http://localhost:3000/search?term=anil&page=1
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
