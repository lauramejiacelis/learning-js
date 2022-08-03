const URL = 'https://dsangel-todos-api.herokuapp.com/api';

export function authFetch(type, user) {
  return fetch(
    `${URL}/${type}`,
    type === 'register'
      ? {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ user }),
        }
      : {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        }
  ).then((res) => {
    return res.json().then((info) => {
      if (!res.ok) {
        const { errors } = info;
        throw errors;
      }
      return info;
    });
  });
}
