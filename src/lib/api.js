import axios from "axios";
import {asyncLocalStorage} from '../lib/helpers';

export const BASE_URL = 'http://www.omdbapi.com/';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000
});


axiosInstance.defaults.headers.common["Content-Type"] = "application/json";


axiosInstance.interceptors.request.use(
  async config => {
    console.log("REQUEST : ", config);
  },
  err => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  response => {
    console.log("RESPONSE : ", response.data);
    return response.data;
  },
  error => {
    if (!error.response) {
      console.log('NETWORK ERROR');
    }
    console.log("response error: ", error.response ? error.response : error);
    if (error.response) {
      asyncLocalStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
