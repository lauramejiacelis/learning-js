require("dotenv").config();

const express = require("express");
var session = require("express-session");

const routes = require("./routes");

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(
  session({
    name: "session_id",
    secret: process.env.SESSION_SECRET,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60, // 1min
    },
  })
);

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
