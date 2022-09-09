import React from 'react';

import ErrorIcon from '../Icons/ErrorIcon';
import classes from './ErrorMessage.module.css';

const ErrorMessage = (props) => {
  return (
    <div className={classes.info}>
      <ErrorIcon />
      <h3>{props.info}</h3>
    </div>
  );
};

export default ErrorMessage;
