import axios from './../axios/axios';

export const searchBooks = (searchRequest) => {
  return axios.get(`volumes?q=${searchRequest}&key=AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI`);
};
