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
  CHANGE_SEARCH_CATEGORY,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  books: { items: [] },
  book: {},
  sorting: 'relevance',
  category: 'all',
  searchString: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload,
      };
    case CHANGE_SEARCH_SORTING: {
      return {
        ...state,
        sorting: action.payload,
      };
    }
    case CHANGE_SEARCH_CATEGORY: {
      return {
        ...state,
        category: action.payload,
      };
    }
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
        books: { ...action.payload },
      };
    case SET_MORE_BOOKS:
      return {
        ...state,
        books: { ...state.books, items: [...state.books.items, ...action.payload.items] },
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
