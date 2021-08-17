import {
  CHANGE_SEARCH_SORTING,
  REQUEST_BOOK,
  REQUEST_BOOKS,
  CHANGE_SEARCH_STRING,
  SEARCHING_BOOKS_IN_PROGRESS,
  SEARCHING_BOOK_IN_PROGRESS,
  SET_BOOK,
  SET_BOOKS,
  SET_MORE_BOOKS,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  books: [],
  book: {},
  sorting: 'relevance',
  searchString: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload,
      };
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
    case SET_MORE_BOOKS:
      return {
        ...state,
        books: [...state.books, ...action.payload],
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
    case CHANGE_SEARCH_SORTING: {
      return {
        ...state,
        sorting: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
