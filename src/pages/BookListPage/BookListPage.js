import React from 'react';
import classes from './BookListPage.module.scss';
import BookList from '../../components/BookList/BookList';
import { connect } from 'react-redux';
import { getMoreBooks } from '../../store/thunks/search';
import Preloader from '../../components/UI/Preloader/Preloader';
import Error from '../../components/UI/Error/Error';
import {
  booksSelector,
  errorSelector,
  isLoadingSelector,
  searchStringSelector,
} from '../../store/selectors/search';

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
  books: booksSelector(state),
  isLoading: isLoadingSelector(state),
  searchString: searchStringSelector(state),
  error: errorSelector(state),
});

export default connect(mapStateToProps, { getMoreBooks })(BookListPage);
