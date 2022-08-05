const URL = 'https://dsangel-todos-api.herokuapp.com/api';

export function authFetch(type, data) {
  return fetch(
    `${URL}/${type}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    } //register with braces, login without braces
  ).then((res) => {
    return res.json().then((info) => {
      if (!res.ok) {
        //const { errors } = info;
        throw info;
      }
      return info;
    });
  });
}

export function logoutFetch() {
  return fetch(`${URL}/logout`).then((res) => res.json());
}

export const getTodosApi = () => {
  return fetch('https://dsangel-todos-api.herokuapp.com/api/todos').then(
    (res) =>
      res.json().then((info) => {
        if (!res.ok) {
          console.log(info);
          throw info;
        }
        return info;
      })
  );
};
