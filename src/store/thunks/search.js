import { searchAPI } from '../../api/search';
import { setBooks, toggleSearchingInProgress } from '../actions/search';

export const getBooks = (searchString) => (dispatch) => {
  dispatch(toggleSearchingInProgress(true));
  searchAPI
    .requestBooks(searchString)
    .then((response) => {
      const books = response.data.items;
      dispatch(setBooks(books));
    })
    .finally(() => {
      dispatch(toggleSearchingInProgress(false));
    });
};
