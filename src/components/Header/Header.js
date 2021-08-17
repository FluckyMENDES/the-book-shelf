import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import SearchForm from './SearchForm/SearchForm';

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className="container">
        <Link to="/">
          <h1>The Books shelf</h1>
        </Link>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
