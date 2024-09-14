import express from "express";

const router = express.Router();
import { about } from "../controllers/aboutController.js";

import { home } from "../controllers/homeController.js";

router.get("/", home); //used in Controller for logic
router.get("/about", about);
// module.exports=router;
export default router;
