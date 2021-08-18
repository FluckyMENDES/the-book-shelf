import React from 'react';
import classes from './SearchForm.module.scss';
import { connect } from 'react-redux';
import { getBooks } from './../../../store/thunks/search';
import {
  changeSearchString,
  changeSearchSorting,
  changeSearchCategory,
} from '../../../store/actions/search';
import SearchInput from './SearchInput/SearchInput';
import { useHistory } from 'react-router-dom';
import Select from '../../UI/Select/Select';
import {
  booksSelector,
  categorySelector,
  searchStringSelector,
  sortingSelector,
} from '../../../store/selectors/search';

const SearchForm = ({
  searchString,
  changeSearchString,
  sorting,
  changeSearchSorting,
  category,
  changeSearchCategory,
  getBooks,
}) => {
  const { push } = useHistory();

  const onSearchInputChange = (e) => {
    changeSearchString(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    getBooks({ searchString, sorting, category });
    push('/');
  };

  const onChangeSorting = (e) => {
    changeSearchSorting(e.target.value);
  };

  const onChangeCategory = (e) => {
    changeSearchCategory(e.target.value);
  };

  return (
    <form className={classes.SearchForm} onSubmit={onFormSubmit}>
      <SearchInput value={searchString} onChange={onSearchInputChange} />
      <div className={classes.wrapper}>
        <Select
          label="category"
          value={category}
          onChange={onChangeCategory}
          options={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}
        />
        <Select
          label="sorting by"
          value={sorting}
          onChange={onChangeSorting}
          options={['relevance', 'newest']}
        />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    books: booksSelector(state),
    sorting: sortingSelector(state),
    category: categorySelector(state),
    searchString: searchStringSelector(state),
  };
};

export default connect(mapStateToProps, {
  changeSearchString,
  changeSearchSorting,
  changeSearchCategory,
  getBooks,
})(SearchForm);
