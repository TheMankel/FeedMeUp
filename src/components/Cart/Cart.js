import React, { useState } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Navbar from '../UI/Navbar/Navbar';
import ShoppingIcon from '../UI/Icons/ShoppingIcon';
import Button from '../UI/Button/Button';
import Checkout from './Checkout';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';
import DeliveryIcon from '../UI/Icons/DeliveryIcon';

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);
  const [isOrdering, setIsOrdering] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [httpError, setHttpError] = useState();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsOrdering(true);
  };

  const submitOrderHandler = async (userData) => {
    try {
      const res = await fetch(
        'https://react-rest-2137-default-rtdb.firebaseio.com/orders.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: userData,
            orderedItems: cartCtx.items,
          }),
        },
      );

      if (!res.ok) throw new Error('Something went wrong!');

      setIsOrdered(true);
      cartCtx.clearCart();
    } catch (err) {
      setHttpError(err.message);
    }
  };

  if (httpError)
    return (
      <Modal onClose={props.onClose}>
        <Navbar label='Shopping Cart' onClose={props.onClose} />
        <ErrorMessage info={httpError} />
      </Modal>
    );

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

  const OrderedInfo = (
    <div className={classes.ordered}>
      <h3>Thank you</h3>
      <DeliveryIcon />
      <h4>Your order will be with you soon!</h4>
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      <Navbar label='Shopping Cart' onClose={props.onClose} />
      {!isOrdering && !isOrdered && CartComponents}
      {isOrdering && !isOrdered && (
        <Checkout onOrder={submitOrderHandler} totalAmount={totalAmount} />
      )}
      {isOrdered && OrderedInfo}
    </Modal>
  );
};

export default Cart;
