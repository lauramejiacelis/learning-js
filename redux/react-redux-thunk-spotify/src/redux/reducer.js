import {
  GET_ARTISTS_LOADING,
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_FAILURE,
} from './types'

const initialState = {
  albums: [],
  artists: [],
  isloading: false,
  error: null,
};

const getArtistsreducer = (state= initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS_LOADING:
      return { ...state, isLoading: true, error: null };
    case GET_ARTISTS_SUCCESS:
      return { ...state, isLoading: false, artists: action.payload.artists, albums: action.payload.albums};
    case GET_ARTISTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default getArtistsreducer;