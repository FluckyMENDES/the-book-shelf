export const bookSelector = (state) => {
  return state.search.book;
};

export const isLoadingSelector = (state) => {
  return state.search.isLoading;
};

export const errorSelector = (state) => {
  return state.search.error;
};

export const booksSelector = (state) => {
  return state.search.books.items;
};

export const searchStringSelector = (state) => {
  return state.search.searchString;
};

export const sortingSelector = (state) => {
  return state.search.sorting;
};

export const categorySelector = (state) => {
  return state.search.category;
};
