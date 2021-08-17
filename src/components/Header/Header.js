import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className="container">
        <h1>Books shelf</h1>
      </div>
    </header>
  );
};

export default Header;
