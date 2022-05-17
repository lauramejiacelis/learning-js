import {
  getArtistLoading,
  getArtistSuccess,
  getArtistError,
} from './actionCreators';
import { getArtistSelector } from './selectors';

const token =
  'BQAsRBLJeHZhfeh_KOiCgarNQPNcZpdU66EQgXUvbohM_DhrixrQ0b2LLPI5mNxfngEXJLhj-IGK1BRoEA0RC6tpgnSMToiHeMGM2mDOO2RNAVzQjKyscnXHLD0rZ6WHN0eIzromNhIBhev1XavrUniqEwT_hPvHg1M';

function getArtistApi(artistName) {
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

export const getArtistThunk = (artistName) => (dispatch, getState) => {
  const state = getState();
  const artist = getArtistSelector(state);
  console.log(artist);
  if (artist.lenght > 0){
      return;
  }
  dispatch(getArtistLoading());
  setTimeout(()=> {
    getArtistApi(artistName)
      .then((artist) => {
        dispatch(getArtistSuccess(artist));
      })
    .catch((err)=>{
        dispatch(getArtistError(err));
    });
  },1000);
};