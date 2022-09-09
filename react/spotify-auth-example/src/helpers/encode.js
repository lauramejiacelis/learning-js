export function encodeIdAndSecret(id, secret) {
  return btoa(`${id}:${secret}`);
}
