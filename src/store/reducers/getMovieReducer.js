import { GET_MOVIE, GET_MOVIE_FAIL } from "../actions/ActionTypes";

const INITIAL_STATE = {
  getMovieError: null,
  movie: null
};
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case GET_MOVIE:
    return {
      ...state,
      getMovieError: null,
      movie: payload
    };
  case GET_MOVIE_FAIL:
    return {
      ...state,
      getMovieError: payload.Error,
      movie: null
    };
  default:
    return state;
  }
};
