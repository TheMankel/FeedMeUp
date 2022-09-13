import React from 'react';

import WarningIcon from '../Icons/WarningIcon';
import classes from './FormInput.module.css';

const FormInput = (props) => {
  const message = (
    <div className={classes.message}>
      <WarningIcon />
      <span>{props.label} is invalid</span>
    </div>
  );

  const inputClasses = props.validity ? '' : classes.invalid;
  return (
    <div className={classes.control}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={inputClasses}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        autoComplete='off'
        onBlur={props.onBlur}
        onChange={props.onChange}
        value={props.value}
      />
      {!props.validity && message}
    </div>
  );
};

export default FormInput;
