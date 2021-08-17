import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BookItem.module.scss';
import BookIcon from './../../../assets/img/book.svg';

const BookItem = ({ id, volumeInfo: { title, categories, authors, imageLinks } }) => {
  return (
    <li className={classes.BookItem}>
      <figure>
        <Link to={`/books/${id}`}>
          <img src={imageLinks?.smallThumbnail || BookIcon} alt={title} />
        </Link>
        <figcaption>{title}</figcaption>
      </figure>
      <span>{categories ? categories[0] : ''}</span>
      <span>{authors?.join(' ') || 'Unknown author'}</span>
    </li>
  );
};

export default BookItem;
