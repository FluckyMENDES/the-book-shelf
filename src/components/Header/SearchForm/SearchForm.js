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
    getBooks(searchString, sorting, category);
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
      <div>
        <label>
          Category
          <select value={category} onChange={onChangeCategory}>
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </label>

        <label>
          Sorting
          <select value={sorting} onChange={onChangeSorting}>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </label>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.search.books,
    sorting: state.search.sorting,
    category: state.search.category,
    searchString: state.search.searchString,
  };
};

export default connect(mapStateToProps, {
  changeSearchString,
  changeSearchSorting,
  changeSearchCategory,
  getBooks,
})(SearchForm);
