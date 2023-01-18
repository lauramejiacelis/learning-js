import {
  getLoading,
  getArtistsSuccess,
  getError,
  getAlbumsSuccess,
} from './actionCreators';

const token =
  'BQC_f4YJ04L3fDtrm7vSuw6tt6cFj1jg3wF7GQ_PIY0_Yqh0gwINOMEFDDDxcrRfxyw0jmqm6AFQB3Wi7iuqjnXvuA2zcbW77oX8vx3hh9aPPC2U1e9TRLsmURXRVGR-wS75Na7B9pM1vt4FUesEe5VAvgsFeZcNAuvEjEU';

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

export const getArtistsThunk = (artistName) => (dispatch) => {
  dispatch(getLoading());
  setTimeout(()=> {
    getArtistsApi(artistName)
      .then((artist) => {
        dispatch(getArtistsSuccess(artist));
      })
    .catch((err)=>{
        dispatch(getError(err));
    });
  },1000);
};

export const getAlbumsThunk = (artistId) => (dispatch) => {
  dispatch(getLoading())

  setTimeout(()=>{
    getAlbumsApi(artistId)
      .then((album)=>{
        dispatch(getAlbumsSuccess(album))
      })
    .catch((err)=>{
      dispatch(getError(err))
    })
  },1000)
  
}