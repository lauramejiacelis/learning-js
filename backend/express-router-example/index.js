const express = require("express");
const app = express();
const userRoutes = require("./user.routes");

app.get("/health", (req, res) => res.send("Ok"));

app.use("/user", userRoutes);

app.listen(3000, () => console.log(`Server listening at 3000`));
