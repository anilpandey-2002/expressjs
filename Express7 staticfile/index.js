// In Express, a "view" refers to the part of the application that renders the user interface (UI) to the client, typically using a template engine. Express supports various template engines like EJS, Pug (formerly Jade), and Handlebars to create dynamic HTML pages.
// seperate your application logic from presentation logic
import express from "express";
import { join } from "path";
import web from "./routes/web.js";
const app = express();
const PORT = process.env.PORT || 3000;

// STATIC FILES CODE
// app.use(express.static("public"));
// app.use(express.static(join(process.cwd(), "public"))); //2nd method good way
app.use("/css", express.static(join(process.cwd(), "public/css"))); //only css will work from puclic
// app.use("/static", express.static(join(process.cwd(), "public"))); //now put static in front to use virtual path

app.use("/", web);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const options = {
  // dotfiles: "ignore",
  dotfiles: "allow",

  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};
app.use(express.static(join(process.cwd(), "public"), options)); //2nd method good way
