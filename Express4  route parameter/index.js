// Route parameters in Express are used to capture values from the URL and use them within the route handler. They are defined by placing a colon (:) before the parameter name in the route path. These parameters allow you to handle dynamic routes, such as fetching data based on a user ID, product ID, or any other dynamic content.
// example- /student/:id
// example- /product/:category/and/:id

import express from "express";
const app = express();
const port = 3000;

// Defining a route with a parameter 'id'
app.get("/users/:id([0-9]{2})", (req, res) => {
  // Accessing the route parameter 'id'
  console.log(req.params);
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});
// also
// app.get('/users/:userId/posts/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   res.send(`User ID: ${userId}, Post ID: ${postId}`);
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
