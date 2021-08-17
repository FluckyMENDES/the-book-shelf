import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  // withCredentials: true,
  // headers: {
  //   key: 'AIzaSyDXbi_V9D4X9YomgHICX8rc2B1wPI97csI',
  // },
});

export default instance;
