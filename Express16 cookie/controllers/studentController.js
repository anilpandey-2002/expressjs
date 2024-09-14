class stu {
  static set_cookie = (req, res) => {
    res.cookie("username", "anil");
    res.cookie("cart", 5);
    //session cookie
    // res.cookie("username", "anil", { maxAge: 20000 });
    // res.cookie("cart", 5);
    res.send("cookie set");
  };
  static get_cookie = (req, res) => {
    console.log(req.cookies);
    res.send("cookie get");

    // console.log(req.cookies.cart);
  };
  static delete_cookie = (req, res) => {
    res.clearCookie("username");
    res.send("cookie delete");
  };
}
export { stu };
