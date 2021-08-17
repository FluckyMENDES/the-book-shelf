import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './BookPage.module.scss';
import { getBook } from '../../store/thunks/search';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/UI/Preloader/Preloader';
import BookIcon from '../../assets/img/book.svg';

const BookPage = ({ book, isLoading, getBook }) => {
  let { bookId } = useParams();

  useEffect(() => {
    getBook(bookId);
  }, [getBook, bookId]);

  if (isLoading) return <Preloader />;

  return (
    <div className={classes.BookPage}>
      <div>
        <img src={book.volumeInfo?.imageLinks?.medium || BookIcon} alt={book.volumeInfo?.title} />
      </div>
      <div>
        <span className={classes.categories}>{book.volumeInfo?.categories?.join(' / ')}</span>
        <h1>{book.volumeInfo?.title}</h1>
        <span className={classes.author}>{book.volumeInfo?.authors?.join(', ')}</span>

        <p>{book.volumeInfo?.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  book: state.search.book,
  isLoading: state.search.isLoading,
});

export default connect(mapStateToProps, { getBook })(BookPage);
