import React, { useRef } from 'react';

import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const inputRef = useRef();
  const addRef = useRef();
  const removeRef = useRef();

  const addProductHandler = (e) => {
    e.preventDefault();

    const inputAmountValue = +inputRef.current.value;

    if (inputAmountValue < 1 || inputAmountValue > 5) return;

    props.addHandler(inputAmountValue);
    props.onClose();
  };

  const addItem = () => {
    if (inputRef.current.value < 5) inputRef.current.value++;

    removeRef.current.classList.remove(classes.disable);

    if (+inputRef.current.value === 5)
      addRef.current.classList.add(classes.disable);
  };

  const removeItem = () => {
    if (inputRef.current.value > 0) inputRef.current.value--;

    addRef.current.classList.remove(classes.disable);

    if (+inputRef.current.value === 0)
      removeRef.current.classList.add(classes.disable);
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
        addRef={addRef}
        removeRef={removeRef}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
