import { searchAPI } from '../../api/search';
import {
  setBook,
  setBooks,
  setError,
  setMoreBooks,
  toggleSearchingInProgress,
} from '../actions/search';

export const getBooks =
  ({ searchString, sorting, category }) =>
  async (dispatch) => {
    dispatch(toggleSearchingInProgress(true));
    dispatch(setError(null));
    try {
      dispatch(setBooks({ items: [] }));
      const response = await searchAPI.requestBooks({ searchString, sorting, category });
      const books = response.data;
      dispatch(setBooks(books));
    } catch (error) {
      dispatch(setError('Ooops. Something went wrong... Please try later.'));
    }

    dispatch(toggleSearchingInProgress(false));
  };

export const getMoreBooks = (searchString, sorting, startIndex, isRetry) => async (dispatch) => {
  dispatch(toggleSearchingInProgress(true));
  dispatch(setError(null));

  try {
    const response = await searchAPI.requestBooks({ searchString, sorting, startIndex, isRetry });

    const books = response.data;
    dispatch(setMoreBooks(books));
  } catch (error) {
    dispatch(setError('Ooops. Something went wrong... Please try later.'));
  }
  dispatch(toggleSearchingInProgress(false));
};

export const getBook = (id) => async (dispatch) => {
  dispatch(toggleSearchingInProgress(true));
  dispatch(setError(null));

  try {
    const response = await searchAPI.requestBook(id);

    const book = response.data;
    dispatch(setBook(book));
  } catch (error) {
    dispatch(setError('Ooops. Something went wrong... Please try later.'));
  }
  dispatch(toggleSearchingInProgress(false));
};
