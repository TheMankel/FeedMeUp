import React from 'react';
import Input from '../../UI/Input/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const addProductHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={addProductHandler}>
      <Input
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
        label='Amount'
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
