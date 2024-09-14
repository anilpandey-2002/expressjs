// the Router class is used to create modular, mountable route handlers. A router behaves like a mini application that contains its middleware and routes, which can be attached to the main application.

// const express = require("express");
import express from "express";
// const stu = require("./routes/student.js");
import stu from "./routes/student.js";
import tea from "./routes/teacher.js";

const app = express();
// LOAD ROUTER MODULES
const port = process.env.PORT || 3000;

app.use("/student", stu);
app.use("/teacher", tea);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
