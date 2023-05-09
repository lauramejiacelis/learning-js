const { Router } = require("express");
const { User } = require("../models");

const router = Router();

router.post("/todo", async (req, res, next) => {
  const userId = req.session.userId;

  const { description } = req.body;

  const user = await User.findOne({ where: { id: userId } });

  const todo = await user.createTodo({ description, status: "todo" });

  res.send(todo);
});

router.get("/todo", (req, res, next) => {
  // TAREA: terminarlo para la otra semana
});

// TAREA: terminar el CRUD

module.exports = router;
