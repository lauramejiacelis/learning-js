require("dotenv").config();

const express = require("express");
const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { sequelize } = require("./models");

const routes = require("./routes");

const PORT = process.env.PORT ?? 3000;

const app = express();

const sessionStore = new SequelizeStore({
  db: sequelize,
});

app.use(
  session({
    name: "session_id",
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    },
  })
);

sessionStore.sync();

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
