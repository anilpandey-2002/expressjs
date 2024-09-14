const allStu = (req, res) => {
  res.send("all student");
};

const deleteStu = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  if (id == 10) {
    res.send("ya id anil ki ha ");
  }
  res.send("deleted ");
};
export { allStu, deleteStu };
