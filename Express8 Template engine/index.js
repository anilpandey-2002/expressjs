// A template engine in Express.js allows you to generate dynamic HTML pages on the server side, combining your HTML with data and JavaScript logic. Commonly used template engines include Pug, EJS (Embedded JavaScript), and Handlebars. Here's a guide on how to set up and use a template engine with Express:
// const express = require("express");
import express from "express";
const app = express();
const port = 3000;
import web from "./routes/web.js";
import { join } from "path";

// we have to set directory if  folder name is different otherwise by default it works
app.set("views", "./views"); //default
// app.set("views", "./myviews");

// Set the view engine to EJS compulsory or write filename with extension on  res.render("index.ejs");
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use("/css", express.static(join(process.cwd(), "public/css"))); //only css will work from puclic

// Define a route to render the index page in template engine files
app.use("/", web);
//  RENDER FUNCTION example
// res.render("index", { name: "sonam", function(err, html) {} });
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
