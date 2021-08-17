import React from 'react';
import classes from './Select.module.scss';

const Select = ({ value, onChange, label, options }) => {
  const id = `${value}{${Date.now()}}`;
  const renderOptions = (items) =>
    items.map((item, index) => (
      <option key={`${item}${index}`} value={item}>
        {item}
      </option>
    ));
  return (
    <div className={classes.Select}>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={onChange}>
        {renderOptions(options)}
      </select>
    </div>
  );
};

export default Select;
