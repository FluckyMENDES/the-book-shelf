import { searchAPI } from '../../api/search';
import { setBook, setBooks, setMoreBooks, toggleSearchingInProgress } from '../actions/search';

export const getBooks = (searchString, sorting) => (dispatch) => {
  dispatch(toggleSearchingInProgress(true));
  dispatch(setBooks([]));
  searchAPI
    .requestBooks({ searchString, sorting })
    .then((response) => {
      const books = response.data.items;
      dispatch(setBooks(books));
    })
    .finally(() => {
      dispatch(toggleSearchingInProgress(false));
    });
};

export const getMoreBooks = (searchString, sorting, startIndex, isRetry) => (dispatch) => {
  dispatch(toggleSearchingInProgress(true));
  searchAPI
    .requestBooks({ searchString, sorting, startIndex, isRetry })
    .then((response) => {
      const books = response.data.items;
      dispatch(setMoreBooks(books));
    })
    .finally(() => {
      dispatch(toggleSearchingInProgress(false));
    });
};

export const getBook = (id) => (dispatch) => {
  dispatch(toggleSearchingInProgress(true));
  searchAPI
    .requestBook(id)
    .then((response) => {
      const book = response.data;
      dispatch(setBook(book));
    })
    .finally(() => {
      dispatch(toggleSearchingInProgress(false));
    });
};
