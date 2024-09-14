import express from "express";

const router = express.Router();

import { stu } from "../controllers/stuController.js";
import middleware from "../middlewares/m.js";
// Router level middleware
router.use("/", middleware);
router.get("/student", stu); //used in Controller for logic
router.get("/event", (req, res) => {
  res.send("events");
}); //used in Controller for logic

export default router;
