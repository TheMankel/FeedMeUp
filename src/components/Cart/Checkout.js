import React from 'react';
import Button from '../UI/Button/Button';

import FormInput from '../UI/FormInput/FormInput';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.wrapper}>
        <h3>Delivery address</h3>
        <div className={classes['form-wrapper']}>
          <FormInput
            label='Street name'
            placeholder='Type street name'
            type='text'
            id='streetName'
          />
          <FormInput
            label='House number'
            placeholder='Type house number'
            type='text'
            id='streetNumber'
          />
          <FormInput
            label='Postcode'
            placeholder='Type your postal code'
            type='text'
            id='postalCode'
          />
          <FormInput
            label='City'
            placeholder='Type your city'
            type='text'
            id='city'
          />
        </div>
      </div>
      <div className={classes.wrapper}>
        <h3>Personal details</h3>
        <div className={classes['form-wrapper']}>
          <FormInput
            label='First and last name'
            placeholder='Type your first and last name'
            type='text'
            id='fullName'
          />
          <FormInput
            label='E-mail'
            placeholder='yourname@email.com'
            type='text'
            id='email'
          />
          <FormInput
            label='Phone number'
            placeholder='Type your phone number'
            type='text'
            id='phoneNumber'
          />
        </div>
      </div>
      <Button name='Confirm' totalAmount={props.totalAmount} />
    </form>
  );
};

export default Checkout;
