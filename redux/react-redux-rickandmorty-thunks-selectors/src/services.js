export function getCharactersApi () {
    return fetch('https://rickandmortyapi.com/api/character')
        .then((res)=>res.json())
        .then(({results})=>results.map(({id, name, status, species, origin, location, image})=> ({
            id, 
            name, 
            status, 
            species, 
            originName: origin.name, 
            locationName: location.name, 
            image})))
}