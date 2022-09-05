import React from 'react';
import AddIcon from '../Icons/AddIcon';
import RemoveIcon from '../Icons/RemoveIcon';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      {/* <label htmlFor={props.input.id}>{props.label}</label> */}
      <span onClick={props.onRemove}>
        <RemoveIcon />
      </span>
      <input ref={ref} {...props.input}></input>
      <span onClick={props.onAdd}>
        <AddIcon />
      </span>
    </div>
  );
});

export default Input;
