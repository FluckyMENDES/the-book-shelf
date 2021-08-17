import React from 'react';
import classes from './Preloader.module.scss';
import { ReactComponent as Icon } from '../../../assets/img/preloader.svg';

const Preloader = ({ center = false }) => {
  const cls = [classes.Preloader];
  if (center) cls.push(classes.center);
  return (
    <div className={cls.join(' ')}>
      <Icon />
    </div>
  );
};

export default Preloader;
