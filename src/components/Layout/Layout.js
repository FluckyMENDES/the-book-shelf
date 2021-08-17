import React from 'react';
import Header from '../Header/Header';
import classes from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
