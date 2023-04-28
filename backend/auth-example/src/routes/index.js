const { Router } = require("express");

const AuthRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes")

const router = Router();

router.get('/', (req, res)=>{
  res.render('home')
})

// router.use("/api", AuthRoutes);
// router.use("/user", userRoutes)

module.exports = router;
