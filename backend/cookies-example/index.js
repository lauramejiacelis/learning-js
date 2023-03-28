const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("hello", "World");
  res.send("Hello world");
});

app.listen(3000, () => console.log("Server listening on 3000"));
