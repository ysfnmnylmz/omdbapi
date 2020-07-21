import {
  GET_MOVIE,
  GET_MOVIE_FAIL
} from "./ActionTypes";
import api from "../../lib/api";
import { fetchingFailure, fetchingSuccess } from './handler';
import { asyncLocalStorage } from '../../lib/helpers';

export const getMovie = (title) => async dispatch => {
  try {
    const localStorage = await asyncLocalStorage.getItem('searchTypes');
    if (localStorage.length === 0) {
      await asyncLocalStorage.setItem('searchTypes', title);
    } else {
      await asyncLocalStorage.setItem('searchTypes', localStorage + ',' + title);
    }
    const response = await api.get(`?t=${title}`);
    const payload = await response.data;
    if(payload.Response === 'True'){
      dispatch(fetchingSuccess(GET_MOVIE, payload));
    }else{
      dispatch(fetchingFailure(GET_MOVIE_FAIL, payload));
    }
  } catch (error) {
    console.log(error)
  }
};
