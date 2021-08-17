import axios from '../axios/axios';

export const searchAPI = {
  _maxResults: 12,
  _path: null,
  requestBooks({ searchString, sorting = 'relevance', startIndex = 1, isRetry }) {
    let path;
    if (isRetry) {
      path =
        this._path ||
        `volumes?q=${searchString}&maxResults=${this._maxResults}&key=AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI`;
    } else {
      path = `volumes?q=${searchString}&maxResults=${this._maxResults}&key=AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI`;
    }

    if (sorting) path += `&orderBy=${sorting}`;
    if (startIndex > 1) path += `&startIndex=${startIndex}`;
    this._path = path;
    return axios.get(path);
  },
  requestBook(id) {
    return axios.get(`volumes/${id}?key=AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI`);
  },
};
