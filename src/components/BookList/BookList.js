import React from 'react';
import classes from './BookList.module.scss';
import BookItem from './BookItem/BookItem';

const BookList = ({ books }) => {
  const renderItems = (items) =>
    items.map((item, index) => <BookItem {...item} key={`${item.id}-${index}`} />);

  return <ul className={classes.BookList}>{renderItems(books)}</ul>;
};

export default BookList;
