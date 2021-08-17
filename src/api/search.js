import axios from '../axios/axios';

export const searchAPI = {
  _maxResults: 12,
  _path: null,
  _apiKey: 'AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI',

  requestBooks({ searchString, sorting = 'relevance', category = 'all', startIndex = 1, isRetry }) {
    let path = `volumes?q=${searchString}`;

    if (isRetry && this._path) {
      path = this._path;
      if (startIndex > 1) path += `&startIndex=${startIndex}`;
    } else {
      if (category !== 'all') path += `+subject:${category}`;

      path += `&maxResults=${this._maxResults}`;

      if (sorting) path += `&orderBy=${sorting}`;

      path += `&key=${this._apiKey}`;

      this._path = path;
    }

    return axios.get(path);
  },
  requestBook(id) {
    return axios.get(`volumes/${id}?key=${this._apiKey}`);
  },
};
