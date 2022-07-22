export function register (user) {
    const requestOptions = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({user,})
    }
    return fetch('https://dsangel-todos-api.herokuapp.com/api/register', requestOptions)
    .then((res)=>res.json())
}