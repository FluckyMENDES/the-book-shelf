import React from 'react';
import { connect } from 'react-redux';
import classes from './BookList.module.scss';
import Preloader from './../UI/Preloader/Preloader';
import BookItem from './BookItem/BookItem';

const BookList = ({ books, isLoading }) => {
  const renderItems = (items) =>
    items.map((item, index) => <BookItem {...item} key={`${item.id}-${index}`} />);

  if (isLoading) return <Preloader />;

  return <ul className={classes.BookList}>{renderItems(books)}</ul>;
};

const mapStateToProps = (state) => ({
  books: state.search.books,
  isLoading: state.search.isLoading,
});

export default connect(mapStateToProps)(BookList);
