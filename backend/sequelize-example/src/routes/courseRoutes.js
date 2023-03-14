// Implement course get all, get by id, add
const { Course } = require("../db/models")
const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
  Course.findAll().then((courses) => {
    res.send(courses);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Course.findOne({ where: {id}}).then((course)=> res.send(course))
})

router.post("/", (req, res)=> {
  const { name } = req.body;
  Course.create({name}).then((course)=>{
    res.send(course)
  })
})

module.exports = router;