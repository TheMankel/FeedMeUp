import React from 'react';

import classes from './FormInput.module.css';

const FormInput = (props) => {
  return (
    <div className={classes.control}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        autoComplete='off'
      />
    </div>
  );
};

export default FormInput;
