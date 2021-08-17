import axios from '../axios/axios';

export const searchAPI = {
  requestBooks(searchString) {
    return axios.get(`volumes?q=${searchString}&key=AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI`);
  },
};
