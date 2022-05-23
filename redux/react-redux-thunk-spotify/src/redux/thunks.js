import {
  getArtistsLoading,
  getArtistsSuccess,
  getArtistsError,
  getAlbumsSuccess,
} from './actionCreators';
import { getArtistsSelector, getAlbumsSelector } from './selectors';

const token =
  'BQCIC49px-MZz3BGPfcPm-dckCsx98TKQG7VjSq5D3U7h1nIPe8517K9mbT2Rbp1WwhH-RlvuZg08PyxCRHVl2f1tWWIwOJzF9JMk5WDlHykctbVwHaLtqcuBzZBFHli2vr_6OsIzSaxciVG7n3ZUk5vFUWWzxLrW2Z4-B4';

function getArtistsApi(artistName) {
  const type = 'artist';
  
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

export const getArtistsThunk = (artistName) => (dispatch, getState) => {
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
};

export const getAlbumsThunk = (artistId) => (dispatch, getState) => {
  const state = getState();
  const albums = getAlbumsSelector(state);
  console.log(albums)
  dispatch(getArtistsLoading())

  setTimeout(()=>{
    getAlbumsApi(artistId)
      .then((album)=>{
        dispatch(getAlbumsSuccess(album))
      })
    .catch((err)=>{
      dispatch(getArtistsError(err))
    })
  },1000)
  
}