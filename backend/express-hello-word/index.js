const express = require("express");
const app = express();

const products = [
  {
    name: "apple",
    price: 1000,
  },
  {
    name: "banana",
    price: 400,
  },
  {
    name: "pear",
    price: 700,
  },
];

// parse json body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body.product);
  res.end();
});

app.get("/product/:name", (req, res) => {
  res.send(req.params.name);
});

app.delete("/product/:name", () => {});

app.put("/product/:name", () => {});

// Tarea: implementar el borrar producto por name
//                    get by name
//                    update by name

app.listen(3000, () => console.log("Server running at 3000"));

/*
 * HTTP:
 *
 * Method, Query, Path, Headers, Body?
 * */
