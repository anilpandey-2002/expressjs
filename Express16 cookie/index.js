// cookies are small pieces of data sent from the server to the client and stored on the client's device. They are often used for session management, personalization, and tracking.

// Key Concepts of Cookies in Express

// Setting Cookies:
// You can set cookies in your Express app using the res.cookie() method.

// Reading Cookies:
// To read cookies sent by the client, you use req.cookies if you're using middleware like cookie-parser.

// Deleting Cookies:
// You can delete cookies using res.clearCookie().

// Using Cookies in Express
// To work with cookies in Express, you often use the cookie-parser middleware, which simplifies handling cookies.
// const express = require("express");
// const cookieParser = require("cookie-parser");
import express from "express";
import cookieParser from "cookie-parser";
const app = express();
const port = 3000;
import router from "./routes/web.js";
// Use cookie-parser middleware
app.use(cookieParser());

app.use("/", router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
