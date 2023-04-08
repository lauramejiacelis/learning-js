const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

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
    const missingField = fields.filter((field) => {
      if (!req.body[field]) {
        return field;
      }
    });
    console.log(missingField);
    missingField
      ? missingField.map((field) =>
          next(new Error(`You need a blog: ${missingField}`))
        )
      : next();
  };
}

function errorMiddleware(err, req, res, next) {
  res.send({ error: true, message: err.message });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
