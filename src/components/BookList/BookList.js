import React from 'react';
import { connect } from 'react-redux';
import classes from './BookList.module.scss';
import Preloader from './../UI/Preloader/Preloader';

const BookList = ({ books, isLoading }) => {
  const renderItems = (items) =>
    items.map((item) => (
      <li key={item.id}>
        <h3>{item.volumeInfo.title}</h3>
      </li>
    ));

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={classes.BookList}>
      <h2>BookList</h2>
      <ul>{renderItems(books)}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.search.books,
  isLoading: state.search.isLoading,
});

export default connect(mapStateToProps)(BookList);
