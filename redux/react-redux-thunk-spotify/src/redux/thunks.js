import {
  getArtistsLoading,
  getArtistsSuccess,
  getArtistsError,
} from './actionCreators';
import { getArtistsSelector } from './selectors';

const token =
  'BQCTofHt7S5gFxA1u_9dZkvKOfwARfYmyTt7nOHcNL_i8fXnDJ44Jt4T63VsUCF566wjN4Z73Mag46vlIvxwqO1DrJ4GE3s9e5PebK0oaP5G4vv_vW0bHqh6pJo_ZFg9Q2Ac4tM8w9Xlw72z10rebgZEM5zl2PauMmYp8OI';

function getArtistsApi(artistName) {
  const type = 'artist';
  //console.log(`Artist ${artistName}`);
  return fetch(
    `https://api.spotify.com/v1/search?q=${artistName}&type=${type}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  .then((res) => res.json())
  .then(({ artists: { items } }) =>
    items.map(({ name, images, id }) => {
      let image = null;
      if (images && images[1]) {
        image = images[1].url;
      }
      return {
        name,
        image,
        id,
      };
    })
  );
}

function getAlbumsApi (artistId){
  console.log(`artist id: ${artistId}`)
  return fetch (
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  .then((res)=> res.json())
  .then(({items}) => items.map(({images, name, release_date})=>{
    let image = null;
    if (images && images[1]) {
      image = images[1].url
    }
    return {
      image, 
      name,
      release_date,
    }
  }))
}

export const getArtistsThunk = (artistName, artistId) => (dispatch, getState) => {
  const state = getState();
  const artists = getArtistsSelector(state);
  console.log(artists);
  if (artists.lenght > 0){
      return;
  }
  dispatch(getArtistsLoading());
  setTimeout(()=> {
    getArtistsApi(artistName)
      .then((artist) => {
        dispatch(getArtistsSuccess(artist));
      })
    .catch((err)=>{
        dispatch(getArtistsError(err));
    });
  },1000);

  
  getAlbumsApi(artistId)


};