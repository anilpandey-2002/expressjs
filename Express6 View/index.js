// In Express, a "view" refers to the part of the application that renders the user interface (UI) to the client, typically using a template engine. Express supports various template engines like EJS, Pug (formerly Jade), and Handlebars to create dynamic HTML pages.
// seperate your application logic from presentation logic
import express from "express";
import web from "./routes/web.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use("/", web);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
