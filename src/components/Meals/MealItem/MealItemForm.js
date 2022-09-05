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

  const addItem = (e) => {
    if (inputRef.current.value < 5) inputRef.current.value++;

    if (+inputRef.current.value === 5) e.target.classList.add(classes.disable);

    e.target
      .closest('div')
      .querySelector('#remove svg')
      .classList.remove(classes.disable);
  };

  const removeItem = (e) => {
    if (inputRef.current.value > 0) inputRef.current.value--;

    if (+inputRef.current.value === 0) e.target.classList.add(classes.disable);

    e.target
      .closest('div')
      .querySelector('#add svg')
      .classList.remove(classes.disable);
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
        onAdd={addItem}
        onRemove={removeItem}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
