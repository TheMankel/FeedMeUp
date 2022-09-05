import React from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import Navbar from '../UI/Navbar/Navbar';
import MealItemForm from './MealItem/MealItemForm';
import classes from './Meal.module.css';

const Meal = (props) => {
  const cartCtx = React.useContext(CartContext);

  const price = `$${props.item.price.toFixed(2)}`;

  const addHandler = (amount) => {
    cartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      price: props.item.price,
      amount: amount,
    });
  };

  return (
    <Modal onClose={props.onClose}>
      <Navbar label={props.item.name} onClose={props.onClose} />
      <div className={classes.meal}>
        <span className={classes.price}>{price}</span>
        <span className={classes.description}>{props.item.description}</span>
        <MealItemForm id={props.id} addHandler={addHandler} />
      </div>
    </Modal>
  );
};

export default Meal;
