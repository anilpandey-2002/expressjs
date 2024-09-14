// import { join } from "path";
const about = (req, res) => {
  //   console.log(join(process.cwd(), "views", "index.html"));
  // res.sendFile(join(process.cwd(), "views", "index.html"));
  res.render("about");
  // res.render('index.ejs');//use when app.set is not set to view engine and ejs
};
export { about };
