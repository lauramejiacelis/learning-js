const express = require('express')
const { engine } = require('express-handlebars')
const axios = require('axios')

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Parsear el form en el req.body
app.use(express.urlencoded({ extended: false }));

app.use("/public", express.static("public"));

app.use(express.json())

app.get('/', (req, res) => {

  axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response=>{
      let pokemonsArray = response.data.results.map((item)=>(item.name))
      console.log(pokemonsArray)
      res.render('home', { pokemonsArray });
    })
    
    .catch((err) => console.log(err));
  
});

app.listen(8000, () => console.log("Server listening on port 8000"));

