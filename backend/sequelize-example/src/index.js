const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(3000, () => console.log("Server listening on port 3000"));
