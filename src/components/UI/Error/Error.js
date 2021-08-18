import React from 'react';
import classes from './Error.module.scss';
import { ReactComponent as ErrorIcon } from '../../../assets/img/error.svg';

const Error = ({ message }) => {
  return (
    <div className={classes.Error}>
      <p>{message}</p>
      <ErrorIcon width={300} height={300} />
    </div>
  );
};

export default Error;
