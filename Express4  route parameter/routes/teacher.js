import express from "express";

const router = express.Router();

// Define a GET route
router.get("/tea1", (req, res) => {
  res.send("Welcome teacher");
});

// Define a POST route
router.post("/tea2", (req, res) => {
  res.send("Data received via POST!");
});

// Define a PUT route
router.put("/tea3", (req, res) => {
  res.send("Data updated!");
});

// Define a DELETE route
router.delete("/tea4", (req, res) => {
  res.send("Data deleted!");
});
export default router;
