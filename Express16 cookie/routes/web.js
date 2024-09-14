import express from "express";

const router = express.Router();
import { stu } from "../controllers/studentController.js";

router.get("/setcookie", stu.set_cookie);
router.get("/getcookie", stu.get_cookie);
router.get("/deletecookie", stu.delete_cookie);

// module.exports=router;
export default router;
