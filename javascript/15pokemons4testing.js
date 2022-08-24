const pokemonFetch = ()=>{
    return (fetch('https://pokeapi.co/api/v2/pokemon/')
.then((res)=>res.json()))
}

pokemonFetch.then((res)=>console.log(res))