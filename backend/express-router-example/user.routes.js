const { Router } = require("express");
const vendorRouters = require("./vendor.routes");

const router = Router();

router.get("/", (req, res) => res.send("User Get"));

router.use("/vendor", vendorRouters);

module.exports = router;
