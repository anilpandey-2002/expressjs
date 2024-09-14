import express from "express";

const router = express.Router();

// Define a GET route
router.get("/stu1", (req, res) => {
  res.send("Welcome");
});

// Define a POST route
router.post("/stu2", (req, res) => {
  res.send("Data received via POST!");
});

// Define a PUT route
router.put("/stu3", (req, res) => {
  res.send("Data updated!");
});

// Define a DELETE route
router.delete("/stu4", (req, res) => {
  res.send("Data deleted!");
});

// module.exports=router;
export default router;
