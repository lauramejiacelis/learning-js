export function getCharactersApi() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(({results}) => results.map(({id, name, status, species, origin, location, image})=>{
            let originName = origin.name;
            let locationName = location.name;
            return {
                id, 
                name, 
                status, 
                species, 
                originName, 
                locationName, 
                image
            }
        }))
}