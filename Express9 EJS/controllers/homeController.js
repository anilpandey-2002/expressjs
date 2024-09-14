const home = (req, res) => {
  const data = { name: "sonam", id: 10, marks: [10, 20, 30, 40, 50] };
  res.render("index", data);
};
export { home };
