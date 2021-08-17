import axios from '../axios/axios';

export const searchAPI = {
  requestBooks(searchString, sorting = 'relevance') {
    let path = `volumes?q=${searchString}&key=AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI`;
    path = sorting && path.concat(`&orderBy=${sorting}`);
    return axios.get(path);
  },
  requestBook(id) {
    return axios.get(`volumes/${id}?key=AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI`);
  },
};
