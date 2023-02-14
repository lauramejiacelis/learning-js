const express = require("express");
const app = express();

app.use(express.json());

app.post(
  "/blog",
  validationMiddleware(["title", "content", "tags"]),
  (req, res) => {
    const blog = req.body;
    console.log(blog);
    res.send(blog);
  }
);

app.use(errorMiddleware);

function validationMiddleware(fields) {
  return (req, res, next) => {
    const missingField = fields.find((field) => {
      if (!req.body[field]) {
        return true;
      }
      return false;
    });
    if (missingField) {
      return next(new Error(`You need a blog ${missingField}`));
    }
    next();
  };
}

function errorMiddleware(err, req, res, next) {
  res.send({ error: true, message: err.message });
}

app.listen(3000, () => console.log("Server listening on port 3000"));
