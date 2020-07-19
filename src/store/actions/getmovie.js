import {
    GET_MOVIE,
    GET_MOVIE_FAIL
  } from "./ActionTypes";
  import api from "../../lib/api";
  import {fetchingFailure, fetchingSuccess} from './handler';
  
  export const getMovie = (title) => async dispatch => {
    try {
      const response = await api.get(`?t=${title}&apikey=676f0853`);
      const payload = await response;
      dispatch(fetchingSuccess(GET_MOVIE, payload));
    } catch (error) {
      dispatch(fetchingFailure(GET_MOVIE_FAIL, error.response));
    }
  };
  