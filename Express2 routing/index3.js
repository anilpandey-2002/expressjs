import express from "express";
const app = express();
const port = process.env.PORT || 3000;
// CHAINED ROUTE
app
  .route("/")
  .all((req, res, next) => {
    console.log("callback");
    // this all  function is optional it works once for a code
    next();
  })
  .get((req, res) => {
    res.send("home page");
  })
  .post((req, res) => {
    res.send("Data received via POST!");
  })
  .put((req, res) => {
    res.send("Data updated!");
  });
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
