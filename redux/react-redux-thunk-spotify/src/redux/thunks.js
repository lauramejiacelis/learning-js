import {
  getArtistLoading,
  getArtistSuccess,
  getArtistError,
} from './actionCreators';
import { getArtistSelector } from './selectors';

const token =
  'BQDHB4MFwC5Liyp1ZAdCxfLrvzHT-xSiB-WJvVmEm8dQAVcX6TrtItqAt1jumW4Nv0hpF03TDqaB1BHg0sQK1gOQnHlvoeuDWfatAFEXcSqNYjw4OoHm_8qD7pNKnPeLEXIfUm4K-z8UksRWr7FGdSggmkuIpmm7aSY';

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