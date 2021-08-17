import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BookItem.module.scss';
import BookIcon from './../../../assets/img/book.svg';

const BookItem = (props) => {
  return (
    <li className={classes.BookItem}>
      <figure>
        <Link to={`/books/${props.id}`}>
          <img
            src={props.volumeInfo.imageLinks?.smallThumbnail || BookIcon}
            alt={props.volumeInfo.title}
          />
        </Link>
        <figcaption>{props.volumeInfo.title}</figcaption>
      </figure>
      <span>{props.volumeInfo.authors?.join(' ') || 'Unknown author'}</span>
    </li>
  );
};

export default BookItem;
