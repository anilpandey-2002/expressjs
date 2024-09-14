import { join } from "path";
const home = (req, res) => {
  //   console.log(join(process.cwd(), "views", "index.html"));
  res.sendFile(join(process.cwd(), "views", "index.html"));
};
export { home };
