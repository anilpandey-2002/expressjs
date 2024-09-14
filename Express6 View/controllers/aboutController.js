import { join } from "path";

const about = (req, res) => {
  //   res.send("about page");
  //   console.log(join(process.cwd(), "views", "about.html"));
  res.sendFile(join(process.cwd(), "views", "about.html"));
};
export { about };
