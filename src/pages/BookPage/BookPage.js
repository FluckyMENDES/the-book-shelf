import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './BookPage.module.scss';
import { getBook } from '../../store/thunks/search';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/UI/Preloader/Preloader';
import BookIcon from '../../assets/img/book.svg';
import Error from '../../components/UI/Error/Error';
import { bookSelector, errorSelector, isLoadingSelector } from '../../store/selectors/search';

const BookPage = ({ book, isLoading, getBook, error }) => {
  let { bookId } = useParams();

  useEffect(() => {
    getBook(bookId);
  }, [getBook, bookId]);

  if (isLoading) return <Preloader />;
  if (error) return <Error message={error} />;

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
  book: bookSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
});

export default connect(mapStateToProps, { getBook })(BookPage);
