const { Router } = require("express");

const AuthRoutes = require("./authRoutes");

const router = Router();

router.use("/", AuthRoutes);

module.exports = router;
