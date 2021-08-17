import {
  REQUEST_BOOK,
  REQUEST_BOOKS,
  SEARCHING_BOOKS_IN_PROGRESS,
  SEARCHING_BOOK_IN_PROGRESS,
  SET_BOOK,
  SET_BOOKS,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  books: [],
  book: {},
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        ...state,
      };
    case SEARCHING_BOOKS_IN_PROGRESS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_BOOKS:
      return {
        ...state,
        books: [...action.payload],
      };
    case REQUEST_BOOK:
      return {
        ...state,
      };
    case SEARCHING_BOOK_IN_PROGRESS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
