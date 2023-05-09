const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Parsear el form en el req.body
app.use(express.urlencoded({ extended: false }));

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("home"); // magic
});

const colors = {
  david: "blue",
  johnny: "red",
  laura: "pink",
};

app.post("/user", (req, res) => {
  const { name, lastname } = req.body;
  res.render("user", { name, lastname, favoriteColor: colors[name] });
});

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  res.render("product", { productName: "Banana", productPrice: 1000 });
});

app.listen(3000, () => console.log("Server listening on port 3000"));
