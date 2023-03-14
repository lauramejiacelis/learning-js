const { Course, User } = require("../db/models");
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  Course.findAll({ include: User }).then((courses) => {
    res.send(courses);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Course.findOne({ where: { id } }).then((course) => res.send(course));
});

router.post("/", (req, res) => {
  const { name } = req.body;
  Course.create({ name }).then((course) => {
    res.send(course);
  });
});

// Impelement adding users to courses

module.exports = router;
