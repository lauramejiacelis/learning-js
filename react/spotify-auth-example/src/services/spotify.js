import axios from "axios";
import { encodeIdAndSecret } from "helpers/encode";

const instance = axios.create();

const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const GRANT_TYPE = "authorization_code";

const encodedSecret = encodeIdAndSecret(CLIENT_ID, CLIENT_SECRET);

export function getToken(code) {
  console.log(REDIRECT_URI)
  return instance
    .post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        code,
        grant_type: GRANT_TYPE,
        redirect_uri: REDIRECT_URI,
      }),
      {
        headers: {
          Authorization: `Basic ${encodedSecret}`,
        },
      }
    )
    .then(({ data: { access_token } }) => {
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
      return { ok: true };
    });
}

export function getPlaylists() {
  return instance
    .get("https://api.spotify.com/v1/me/playlists")
    .then(({ data }) => data);
}

export function getTracks(id){
  return instance
    .get(`https://api.spotify.com/v1/playlists/${id}/tracks`)
    .then(({ data }) => data)
}

export function getUser(){
  return instance
    .get(`https://api.spotify.com/v1/me`)
    .then(({ data }) => data)
}

export function getSearch(item, type) {
  return instance
    .get(`https://api.spotify.com/v1/search?q=${item}&type=${type}`)
    .then(({ data }) => data);
}