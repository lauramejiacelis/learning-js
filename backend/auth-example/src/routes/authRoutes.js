const { Router } = require("express");
const { User } = require("../models");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/register", async (req, res, next) => {
  const user = await User.create(req.body);
  req.session.userId = user.id;
  res.send(user);
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return next(new Error("Authentication error"));
  }

  const result = await User.passCompare(password, user.password);

  if (!result) {
    return next(new Error("Authentication error"));
  }

  delete user.dataValues.password;

  req.session.userId = user.id;
  res.send(user);
});

router.get("/me", authMiddleware, async (req, res) => {
  const userId = req.session.userId;

  const user = await User.findOne({
    where: { id: userId },
    attributes: ["id", "firstName", "lastName", "email"],
  });

  res.send(user);
});

router.post("/logout", (req, res, next) => {
  req.session.destroy();
  res.send("ok");
});

module.exports = router;
