import React from 'react';

import WarningIcon from '../Icons/WarningIcon';
import classes from './FormInput.module.css';

const FormInput = (props) => {
  const message = (
    <div className={classes.message}>
      <WarningIcon />
      <span>{props.label} is required</span>
    </div>
  );

  return (
    <div className={classes.control}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={props.refInput}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        autoComplete='off'
      />
      {props.validity && message}
    </div>
  );
};

export default FormInput;
