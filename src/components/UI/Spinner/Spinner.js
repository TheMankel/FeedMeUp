import React from 'react';

import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div class={classes['lds-roller']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
