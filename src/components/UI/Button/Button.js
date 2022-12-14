import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <div className={classes.order}>
      <button onClick={props.onClick}>
        {props.name}
        <span> ({props.totalAmount})</span>
      </button>
    </div>
  );
};

export default Button;
