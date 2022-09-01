import React from 'react';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <div>
        <label>Amount</label>
        <input
          id={'amount_' + props.id}
          type='number'
          min='1'
          max='5'
          step='1'
          defaultValue='1'></input>
      </div>
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
