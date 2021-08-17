import React from 'react';
import classes from './Header.module.scss';
import SearchForm from './SearchForm/SearchForm';

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className="container">
        <h1>Books shelf</h1>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
