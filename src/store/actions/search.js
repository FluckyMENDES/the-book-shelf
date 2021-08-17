import { REQUEST_BOOKS, SEARCHING_BOOKS_IN_PROGRESS, SET_BOOKS } from '../actionTypes';

export const requestBooks = (bookTitle) => ({
  type: REQUEST_BOOKS,
  payload: bookTitle,
});

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books,
});

export const toggleSearchingInProgress = (isSearchingInProgress) => ({
  type: SEARCHING_BOOKS_IN_PROGRESS,
  payload: isSearchingInProgress,
});
