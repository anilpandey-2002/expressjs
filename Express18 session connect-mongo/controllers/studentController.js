class stu {
  // here is the example of seesion working
  static example = (req, res) => {
    req.session.device = "Mobile";
    if (req.session.count) {
      req.session.count++;
    } else {
      req.session.count = 1;
    }
    res.send(`COUNT: ${req.session.count}`);
  };
  static device = (req, res) => {
    if (req.session.device) {
      res.send(`Device: ${req.session.device} Count:${req.session.count}`);
    } else {
      res.send("session not found");
    }
  };
}
export { stu };
