import React, { useState } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Navbar from '../UI/Navbar/Navbar';
import ShoppingIcon from '../UI/Icons/ShoppingIcon';
import Button from '../UI/Button/Button';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);
  const [isOrdering, setIsOrdering] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const CartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addHandler.bind(null, item)}
          onRemove={removeHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const NoItemsInfo = (
    <div className={classes.info}>
      <ShoppingIcon />
      <h2>Add items to your cart</h2>
      <div>Your basket is empty</div>
    </div>
  );

  const orderHandler = () => {
    setIsOrdering(true);
  };

  const OrderBottom = (
    <>
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <Button name='Order' totalAmount={totalAmount} onClick={orderHandler} />
    </>
  );

  const CartComponents = (
    <>
      {hasItems ? CartItems : NoItemsInfo}
      {hasItems && OrderBottom}
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      <Navbar label='Shopping Cart' onClose={props.onClose} />
      {!isOrdering && CartComponents}
      {isOrdering && <Checkout totalAmount={totalAmount} />}
    </Modal>
  );
};

export default Cart;
