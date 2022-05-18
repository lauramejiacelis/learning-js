import {
  getArtistsLoading,
  getArtistsSuccess,
  getArtistsError,
} from './actionCreators';
import { getArtistsSelector } from './selectors';

const token =
  'BQDM4rwwnp_rKyqjRkmnWG6sZfz5Mx-nZpdKXhHsyOyRxd5DOeDMEzSGV667V_rBT8Z9CKEkO9eFop6IVozpwp0F5TAC9Peft5uCdyfMOSyhV0c1t-BOs81KK2wQF0cAksyd59MnPfblVFKOtkcyEAp9Hib6S75jsfM';

function getArtistsApi(artistName) {
  const type = 'artist';
  console.log(`Artist ${artistName}`);
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