// connect-mongo is a MongoDB session store for express-session, allowing you to store session data in a MongoDB database instead of in memory, which is more suitable for production environments.

// npm install express express-session connect-mongo mongoose

import express from "express";
import session from "express-session";
const app = express();
const port = process.env.PORT || 3000;
import router from "./routes/web.js";
import { connectdb } from "./db/connectdb.js";
import MongoStore from "connect-mongo";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

//mongostore
const store = MongoStore.create({
  mongoUrl: DATABASE_URL,
  dbName: "colgdb",
  collectionName: "sessions",
  ttl: 14 * 24 * 60, //expiry in 14days
  autoRemove: "native",
});

// Middleware to handle sessions
app.use(
  session({
    name: "anil",
    secret: "pass", // Used to sign the session ID cookie
    resave: false, // Forces the session to be saved back to the store
    saveUninitialized: true, // Save a session that is new but not modified
    // cookie: { secure: false }, // Set to true if using HTTPS
    cookie: { maxAge: 100000 }, // expiry
    store: store, //mention store here
  })
);

// route
app.use("/", router);

// mongo connection
connectdb(DATABASE_URL);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
