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

app.get('/pokemon/:name', (req, res)=>{
  const { name } = req.params;
  
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>{
      let pokemonInfo = {
        name: response.data.name,
        height: response.data.height,
        weight: response.data.weight,
        id: response.data.id,
        image: response.data.sprites.other.dream_world.front_default,
        moves: response.data.moves.map(({move})=>move.name),
        types: response.data.types.map(({type})=>type.name)
      }
      console.log(pokemonInfo)
      res.render('pokemon', { name:pokemonInfo.name.toUpperCase(), height: pokemonInfo.height, weight:pokemonInfo.height, id: pokemonInfo.id, image:pokemonInfo.image, moves: pokemonInfo.moves, types:pokemonInfo.types });
    })
    
    .catch((err) => console.log(err));

})

app.listen(8000, () => console.log("Server listening on port 8000"));

