// In Express.js, middleware functions are a fundamental part of the request-handling pipeline. They are functions that have access to the request and response objects, as well as the next middleware function in the application's request-response cycle. Middleware functions can perform a variety of tasks, including modifying the request and response objects, ending the request-response cycle, and calling the next middleware function in the stack.

import express from "express";
const app = express();
const port = 3000;
import web from "./routes/web.js";
import stu from "./routes/student.js";

// import middleware from "./middlewares/m.js";

// we have to set directory if  folder name is different otherwise by default it works
app.set("views", "./views"); //default
// app.set("views", "./myviews");

// Set the view engine to EJS compulsory or write filename with extension on  res.render("index.ejs");
app.set("view engine", "ejs");

// middleware
// app.use(middleware);  //work any path
// app.use("/about", middleware); //work only on about path

// Define a route to render the index page in template engine files
app.use("/", web);
app.use("/", stu);
//  RENDER FUNCTION example
// res.render("index", { name: "sonam", function(err, html) {} });
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
