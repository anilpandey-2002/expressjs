import express from "express";

const router = express.Router();
import { stu } from "../controllers/studentController.js";

router.get("/exam", stu.example); //regenerate session
router.get("/dev", stu.device);

// module.exports=router;
export default router;
