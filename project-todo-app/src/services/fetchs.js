const URL= 'https://dsangel-todos-api.herokuapp.com/api'

//todo
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
  ).then((res)=>{
    return res.json().then((info)=>{
      if(!res.ok){
        const {errors} = info
        throw errors
      }
      return info;
    })
  })
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