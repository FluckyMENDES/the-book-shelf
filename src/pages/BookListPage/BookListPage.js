import React from 'react';
import classes from './BookListPage.module.scss';
import BookList from '../../components/BookList/BookList';
import { connect } from 'react-redux';
import { getMoreBooks } from '../../store/thunks/search';
import Preloader from '../../components/UI/Preloader/Preloader';

const BookListPage = ({ books, totalBooks, isLoading, searchString, getMoreBooks }) => {
  const onLoadMoreClick = () => {
    getMoreBooks(searchString, null, books.length + 1, true);
  };

  return (
    <div className={classes.BookListPage}>
      <BookList books={books} />
      {isLoading && <Preloader />}
      {books.length > 1 && <button onClick={onLoadMoreClick}>Load more</button>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.search.books.items,
  totalBooks: state.search.books.totalItems,
  isLoading: state.search.isLoading,
  searchString: state.search.searchString,
});

export default connect(mapStateToProps, { getMoreBooks })(BookListPage);
