import express from "express";

const router = express.Router();

import { home } from "../controllers/homeController.js";
import { about } from "../controllers/aboutController.js";

router.get("/", home); //used in Controller for logic
router.get("/about", about); //used in Controller for logic

export default router;
