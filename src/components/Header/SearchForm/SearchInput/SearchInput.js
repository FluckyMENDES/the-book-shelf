import React from 'react';
import classes from './SearchInput.module.scss';
import { ReactComponent as SearchIcon } from '../../../../assets/img/search.svg';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className={classes.SearchInput}>
      <label htmlFor="search-book-input">Find books around the world</label>

      <div className={classes.wrapper}>
        <input
          id="search-book-input"
          required
          placeholder="Alice's Adventures in Wonderland"
          value={value}
          onChange={onChange}
        />

        <button type="submit">
          <SearchIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
