import React, { useRef } from 'react';

import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const inputRef = useRef();

  const addProductHandler = (e) => {
    e.preventDefault();

    const inputAmountValue = +inputRef.current.value;

    if (inputAmountValue < 1 || inputAmountValue > 5) return;

    props.addHandler(inputAmountValue);
  };

  return (
    <form className={classes.form} onSubmit={addProductHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
          required: 'required',
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
