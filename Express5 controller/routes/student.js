import express from "express";

const router = express.Router();
import { allStu, deleteStu } from "../controllers/stuController.js";

router.get("/all", allStu); //used in Controller for logic
router.get("/delete/:id([0-9]{2})", deleteStu);
// module.exports=router;
export default router;
