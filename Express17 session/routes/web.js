import express from "express";

const router = express.Router();
import { stu } from "../controllers/studentController.js";

router.get("/getinfo", stu.get_session_info); //session info
router.get("/delete", stu.delete); //delete session
router.get("/reg", stu.regenerate); //regenerate session
router.get("/exam", stu.example); //regenerate session
router.get("/dev", stu.device);

// module.exports=router;
export default router;
