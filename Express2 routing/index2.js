import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("home page");
// });

// app.get("/about", (req, res) => {
//   res.send("about page");
// });

// MORE THAN ONE CALLBACK USING next()
// app.get(
//   "/about",
//   (req, res, next) => {
//     console.log("first callback");
//     next();
//   },
//   (req, res) => {
//     console.log("second callback");
//     res.send("hi anil");
//   }
// );

// ARRAY OF CALLBACK

const c1 = (req, res, next) => {
  console.log("first callback");
  next();
};
const c2 = (req, res, next) => {
  console.log("second callback");
  next();
};
const c3 = (req, res, next) => {
  console.log("third callback");
  res.send("hi anil");
};

app.get("/", [c1, c2, c3]); //also we can used mix way

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
