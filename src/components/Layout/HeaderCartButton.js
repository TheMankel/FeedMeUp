import React, { useEffect, useRef } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../UI/Icons/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = React.useContext(CartContext);
  const { items } = cartCtx;

  const itemsAmount = items.reduce((previousValue, item) => {
    return previousValue + item.amount;
  }, 0);

  const formRef = useRef();

  useEffect(() => {
    if (items.length === 0) return;

    formRef.current.classList.add(classes.bump);

    const timer = setTimeout(() => {
      formRef.current.classList.remove(classes.bump);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={classes.button} onClick={props.onShow} ref={formRef}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
