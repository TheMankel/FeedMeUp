import React, { useRef, useState } from 'react';
import Button from '../UI/Button/Button';

import FormInput from '../UI/FormInput/FormInput';
import classes from './Checkout.module.css';

// const isEmpty = (value) => value.trim() === '';

const hasLetters = (value) => {
  // if (isEmpty(value)) return false;

  const regex = /^[a-zA-Z]+$/;
  // console.log(value, regex.test(value));

  return regex.test(value);
};

const hasNumbers = (value) => {
  // if (isEmpty(value)) return false;

  const regex = /^[0-9]+$/;
  // console.log(value, regex.test(value));

  return regex.test(value);
};

const isPostalCode = (value) => {
  // if (isEmpty(value)) return false;

  const regex = /^([1-9]{2})+(-?[0-9]{3})$/;

  // console.log(value, regex.test(value));
  return regex.test(value);
};

const isFullName = (value) => {
  // if (isEmpty(value)) return false;

  // const regex = /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/;
  const regex =
    /^(([a-zA-Z]+(['-.]+[a-zA-Z]+)*)+ [a-zA-Z]+(['-.]+[a-zA-Z]+)*)$/;

  // console.log(value, regex.test(value));

  return regex.test(value);
};

const isEmail = (value) => {
  // if (isEmpty(value)) return false;

  // const regex = /^([a-zA-Z0-9][.!#$%&'*+/=?^_`{|}~-]{0,1})+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  const regex = /^([a-zA-Z]+([0-9.]*))+@[a-zA-Z]+\.[a-zA-Z]+$/;

  // console.log(value, regex.test(value));

  return regex.test(value);
};

const isPhoneNumber = (value) => {
  // if (isEmpty(value)) return false;

  const regex =
    /^\+?[0-9]{1,4}?[-. ]?\(?[0-9]{1,3}?\)?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,9}$/;
  // console.log(value, regex.test(value));

  return regex.test(value);
};

const Checkout = (props) => {
  const streetNameInputRef = useRef();
  const streetNumberInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const fullNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const [formInputValidity, setFormInputValidity] = useState({
    streetName: true,
    streetNumber: true,
    postalCode: true,
    city: true,
    fullName: true,
    email: true,
    phoneNumber: true,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredStreetName = streetNameInputRef.current.value;
    const enteredStreetNumber = streetNumberInputRef.current.value;
    const enteredCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredFullName = fullNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;

    const enteredStreetNameIsValid = hasLetters(enteredStreetName);
    const enteredStreetNumberIsValid = hasNumbers(enteredStreetNumber);
    const enteredCodeIsValid = isPostalCode(enteredCode);
    const enteredCityIsValid = hasLetters(enteredCity);
    const enteredFullNameIsValid = isFullName(enteredFullName);
    const enteredEmailIsValid = isEmail(enteredEmail);
    const enteredPhoneNumberIsValid = isPhoneNumber(enteredPhoneNumber);

    setFormInputValidity({
      streetName: enteredStreetNameIsValid,
      streetNumber: enteredStreetNumberIsValid,
      postalCode: enteredCodeIsValid,
      city: enteredCityIsValid,
      fullName: enteredFullNameIsValid,
      email: enteredEmailIsValid,
      phoneNumber: enteredPhoneNumberIsValid,
    });

    const formIsValid =
      enteredStreetNameIsValid &&
      enteredStreetNumberIsValid &&
      enteredCodeIsValid &&
      enteredCityIsValid &&
      enteredFullNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneNumberIsValid;

    if (formIsValid) {
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.inputs}>
        <div className={classes.wrapper}>
          <h3>Delivery address</h3>
          <div className={classes['form-wrapper']}>
            <FormInput
              refInput={streetNameInputRef}
              label='Street name'
              placeholder='Type street name'
              type='text'
              id='streetName'
              validity={!formInputValidity.streetName}
            />
            <FormInput
              refInput={streetNumberInputRef}
              label='House number'
              placeholder='Type house number'
              type='text'
              id='streetNumber'
              validity={!formInputValidity.streetNumber}
            />
            <FormInput
              refInput={postalCodeInputRef}
              label='Postcode'
              placeholder='Type your postal code'
              type='text'
              id='postalCode'
              validity={!formInputValidity.postalCode}
            />
            <FormInput
              refInput={cityInputRef}
              label='City'
              placeholder='Type your city'
              type='text'
              id='city'
              validity={!formInputValidity.city}
            />
          </div>
        </div>
        <div className={classes.wrapper}>
          <h3>Personal details</h3>
          <div className={classes['form-wrapper']}>
            <FormInput
              refInput={fullNameInputRef}
              label='First and last name'
              placeholder='Type your first and last name'
              type='text'
              id='fullName'
              validity={!formInputValidity.fullName}
            />
            <FormInput
              refInput={emailInputRef}
              label='E-mail'
              placeholder='yourname@email.com'
              type='text'
              id='email'
              validity={!formInputValidity.email}
            />
            <FormInput
              refInput={phoneNumberInputRef}
              label='Phone number'
              placeholder='Type your phone number'
              type='text'
              id='phoneNumber'
              validity={!formInputValidity.phoneNumber}
            />
          </div>
        </div>
      </div>
      <Button name='Order' totalAmount={props.totalAmount} />
    </form>
  );
};

export default Checkout;
