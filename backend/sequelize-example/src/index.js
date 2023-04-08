const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

const courseRoutes = require("./routes/courseRoutes");

app.use(express.json());

app.use("/api/user", userRoutes);

app.use("/api/course", courseRoutes);

app.listen(3000, () => console.log("Server listening on port 3000"));
