var middleware = (req, res, next) => {
  console.log("logged");
  next();
};
export default middleware;
