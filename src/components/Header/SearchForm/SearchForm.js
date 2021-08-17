import React, { useState } from 'react';
import classes from './SearchForm.module.scss';
import { searchBooks } from './../../../api/books';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState(null);
  const onSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    searchBooks(searchValue);
  };

  return (
    <form className={classes.SearchForm} onSubmit={onFormSubmit}>
      <label>
        Title
        <input
          value={searchValue}
          onChange={onSearchInputChange}
          type="search"
          placeholder="Alice's Adventures in Wonderland"
        />
      </label>
      {/* <div>
        <label>
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
        </label>

        <label>
          Sorting
          <select>
            <option selected>relevance </option>
            <option>newest</option>
          </select>
        </label>
      </div> */}
    </form>
  );
};

export default SearchForm;
