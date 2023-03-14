const { User, Course } = require("../db/models");
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  User.findAll({ include: Course }).then((users) => {
    res.send(users);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  User.findOne({ where: { id } }).then((user) => res.send(user));
});

router.get("/:id/course", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  const courses = await user.getCourses();
  res.send(courses);
});

router.post("/", (req, res) => {
  const { firstName, lastName, email } = req.body;
  User.create({ firstName, lastName, email }).then((user) => {
    res.send(user);
  });
});

router.post("/:id/course", async (req, res) => {
  const { id } = req.params;
  const { courseId } = req.body;
  const user = await User.findOne({ where: { id } });
  const course = await Course.findOne({ where: { id: courseId } });
  await user.addCourse(course); //  Having the instance or create to associate and create at the same time
  res.send(user);
});

module.exports = router;
