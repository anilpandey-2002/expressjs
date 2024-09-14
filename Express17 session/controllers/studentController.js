class stu {
  static get_session_info = (req, res) => {
    console.log(req.session);
    console.log(req.sessionID);

    console.log(req.session.id);
    console.log(req.session.cookie);
    console.log(req.session.cookie.maxAge);
    console.log(req.session.cookie.originalMaxAge);

    res.send("session info");
  };

  static regenerate = (req, res) => {
    req.session.regenerate(() => {
      console.log(`sesseion regenerated ${req.session.id}`);
    });
    res.send("session regenerated");
  };
  static delete = (req, res) => {
    req.session.destroy(() => {
      console.log(`sesseion deleted ${req.session.id}`);
    });
    res.send("session deleted");
  };

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
