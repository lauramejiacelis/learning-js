const URL= 'https://dsangel-todos-api.herokuapp.com/api'

export function registerFetch(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ user }),
      };
  return fetch(
    `${URL}/register`,
    requestOptions
  )//.then((res)=>res.json())
}

export function loginFetch(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ user }),
      };
    return fetch(`${URL}/login`, requestOptions).then((res)=>res.json())
}