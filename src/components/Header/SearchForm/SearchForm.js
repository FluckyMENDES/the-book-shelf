import React, { useState } from 'react';
import classes from './SearchForm.module.scss';
import { connect } from 'react-redux';
import { getBooks } from './../../../store/thunks/search';
import { changeSearchSorting } from '../../../store/actions/search';
import SearchInput from './SearchInput/SearchInput';
import { useHistory } from 'react-router-dom';

const SearchForm = ({ sorting, changeSearchSorting, getBooks }) => {
  const [searchValue, setSearchValue] = useState('');
  const onSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const { push } = useHistory();
  const onFormSubmit = (e) => {
    e.preventDefault();
    getBooks(searchValue, sorting);
    push('/');
  };

  const onChangeSorting = (e) => {
    changeSearchSorting(e.target.value);
  };

  return (
    <form className={classes.SearchForm} onSubmit={onFormSubmit}>
      <SearchInput value={searchValue} onChange={onSearchInputChange} />
      <div>
        {/* <label>
          Category
          <select>
            <option selected>all</option>
            <option>art</option>
            <option>biography</option>
            <option>computers</option>
            <option>history</option>
            <option>medical</option>
            <option>poetry</option>
          </select>
        </label> */}

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
  };
};

export default connect(mapStateToProps, { changeSearchSorting, getBooks })(SearchForm);
