import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILURE,
  GET_CHARACTERS_LOADING,
} from "./types";
const initialState = {
  characters: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_LOADING:
      return { ...state, isLoading: true, error: null };
    case GET_CHARACTERS_SUCCESS:
      return { ...state, isLoading: false, characters: action.payload };
    case GET_CHARACTERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
