import React from 'react';

import AddIcon from '../UI/Icons/AddIcon';
import RemoveIcon from '../UI/Icons/RemoveIcon';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div className={classes.summary}>
        <div className={classes.amount}>{props.amount}</div>
        <h2>{props.name}</h2>
      </div>
      <div className={classes.actions}>
        <span className={classes.price}>{price}</span>
        <div>
          <span onClick={props.onRemove}>
            <RemoveIcon />
          </span>
          <span onClick={props.onAdd}>
            <AddIcon />
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
