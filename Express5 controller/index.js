// In Express.js, controllers are used to handle the logic for processing incoming requests and sending responses. Controllers help separate the concerns of your application, making your code more organized and maintainable by isolating the request handling logic from the routing logic.
// app.js
// const express = require('express');
import express from "express";
import stu from "./routes/student.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use("/student", stu);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
