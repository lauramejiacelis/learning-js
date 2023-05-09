const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const AuthRoutes = require("./authRoutes");
const UserRoutes = require("./userRoutes");

const router = Router();

router.use("/", AuthRoutes);
router.use("/user", authMiddleware, UserRoutes);

module.exports = router;
