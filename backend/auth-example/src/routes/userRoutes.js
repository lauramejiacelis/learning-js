const { Router } = require("express")
const { User } = require("../models")

const router = Router();

router.get("/", (req, res)=>{
  res.render('home');
})

module.exports = router;