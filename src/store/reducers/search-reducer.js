import { REQUEST_BOOKS, SEARCHING_BOOKS_IN_PROGRESS, SET_BOOKS } from '../actionTypes';

const initialState = {
  isLoading: false,
  books: [],
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
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
