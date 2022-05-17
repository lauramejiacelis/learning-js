import {
  GET_ARTIST_LOADING,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAILURE,
} from './types'

const initialState = {
  album: [],
  artist: {},
  isloading: false,
  error: null,
};

const reducer = (state= initialState, action) => {
  switch (action.type) {
    case GET_ARTIST_LOADING:
      return { ...state, isLoading: true, error: null };
    case GET_ARTIST_SUCCESS:
      return { ...state, isLoading: false, artist: action.payload };
    case GET_ARTIST_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;