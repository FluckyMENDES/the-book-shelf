import React from 'react';
import classes from './BookListPage.module.scss';
import BookList from '../../components/BookList/BookList';
import { connect } from 'react-redux';
import { getMoreBooks } from '../../store/thunks/search';
import Preloader from '../../components/UI/Preloader/Preloader';
import Error from '../../components/UI/Error/Error';

const BookListPage = ({ books, error, isLoading, searchString, getMoreBooks }) => {
  const onLoadMoreClick = () => {
    getMoreBooks(searchString, null, books.length + 1, true);
  };

  return (
    <div className={classes.BookListPage}>
      <BookList books={books} />
      {isLoading && <Preloader />}
      {error && <Error message={error} />}
      {books.length > 1 && <button onClick={onLoadMoreClick}>Load more</button>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.search.books.items,
  isLoading: state.search.isLoading,
  searchString: state.search.searchString,
  error: state.search.error,
});

export default connect(mapStateToProps, { getMoreBooks })(BookListPage);
