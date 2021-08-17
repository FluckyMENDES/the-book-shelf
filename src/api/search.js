import axios from '../axios/axios';

export const searchAPI = {
  _maxResults: 12,
  _path: null,
  requestBooks({ searchString, sorting = 'relevance', category = 'all', startIndex = 1, isRetry }) {
    let path = `volumes?q=${searchString}`;
    if (isRetry) {
      path = this._path;
    }

    if (category !== 'all') path += `+subject:${category}`;

    path += `&maxResults=${this._maxResults}`;
    if (sorting) path += `&orderBy=${sorting}`;
    if (startIndex > 1) path += `&startIndex=${startIndex}`;

    path += '&key=AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI';
    this._path = path;
    return axios.get(path);
  },
  requestBook(id) {
    return axios.get(`volumes/${id}?key=AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI`);
  },
};
