const { User } = require("../db/models");
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  User.findAll().then((users) => {
    res.send(users);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  User.findOne({ where: { id } }).then((user) => res.send(user));
});

router.post("/", (req, res) => {
  const { firstName, lastName, email } = req.body;
  User.create({ firstName, lastName, email }).then((user) => {
    res.send(user);
  });
});

module.exports = router;
