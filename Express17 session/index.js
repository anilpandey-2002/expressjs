import express from "express";
import session from "express-session";
const app = express();
const port = 3000;
import router from "./routes/web.js";
// Middleware to handle sessions
app.use(
  session({
    // name:"anil",
    secret: "pass", // Used to sign the session ID cookie
    resave: false, // Forces the session to be saved back to the store
    saveUninitialized: true, // Save a session that is new but not modified
    // cookie: { secure: false }, // Set to true if using HTTPS
    cookie: { maxAge: 20000 }, // expiry
  })
);
app.use("/", router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
