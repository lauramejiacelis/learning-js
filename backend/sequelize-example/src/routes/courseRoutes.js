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

router.post("/:id/user", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  const course = await Course.findOne({ where: { id } });
  const user = await User.findOne({ where: { id: userId } });
  await course.addUser(user);
  res.send(course);
});

router.get("/:id/user", async (req, res) => {
  const { id } = req.params;
  const course = await Course.findOne({ where: { id } });
  const users = await course.getUsers();
  res.send(users);
});

module.exports = router;
