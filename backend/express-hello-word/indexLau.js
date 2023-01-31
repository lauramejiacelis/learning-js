const express = require("express");
const app = express();

let products = [
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
  const product = req.body
  products.push({...product})
  //products.push(req.body.product);
  res.send(`Product ${product.name} has beed added successfully`)
  res.end();
});

const productFound = (name)=>products.find(product=> product.name === name)


app.get("/product/:name", (req, res) => {
  const {name}= req.params
  console.log(name)
  productFound(name)
  console.log(productFound(name))
  productFound(name) ? res.send(`Product ${name} has been found`) : res.send(`Product ${name} is not in the list`)
  
});

app.delete("/product/:name", (req, res) => {
  const {name} = req.params;
  productFound(name)
  console.log(productFound)
  if (productFound(name)){
    products = products.filter((product)=> product.name !== name)
    res.send(`Product ${name} has beed deleted successfully`)
  } else {
    res.send(`Product ${name} is not in the list, so we can't delete it`);
  }
  
});

app.put("/product/:name", (req, res) => {
  const {name}= req.params
  const {price} = req.body
  
  if(productFound(name) && price){
    productFound(name).price = price;
    res.send(`Product ${name} has been updated`)
  } else if(!productFound(name)) {
    res.send(`Product ${name} is not in the list, it can't be updated`);
  } else if (!price) {
    res.send(`You didn't enter a price`);
  }
});

// Tarea: implementar el borrar producto por name
//                    get by name
//                    update by name

app.listen(3000, () => console.log("Laura's Homework Server running at 3000"));

/*
 * HTTP:
 *
 * Method, Query, Path, Headers, Body?
 * */
