import React from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Navbar from '../UI/Navbar/Navbar';
import ShoppingIcon from '../UI/Icons/ShoppingIcon';

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);

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

  return (
    <Modal onClose={props.onClose}>
      <Navbar label='Shopping Cart' onClose={props.onClose} />
      {hasItems ? CartItems : NoItemsInfo}
      {hasItems && (
        <>
          <div className={classes.total}>
            <span>Total</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.order}>
            <button>
              Order<span> ({totalAmount})</span>
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cart;
