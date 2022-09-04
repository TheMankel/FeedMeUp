import React from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import MealItemForm from './MealItem/MealItemForm';

const Meal = (props) => {
  const cartCtx = React.useContext(CartContext);

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
      <div>
        <MealItemForm id={props.id} addHandler={addHandler} />
      </div>
    </Modal>
  );
};

export default Meal;
