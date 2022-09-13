import React, { useEffect, useState } from 'react';
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
  const [enteredInputValue, setEnteredInputValue] = useState({
    streetName: '',
    streetNumber: '',
    postalCode: '',
    city: '',
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const [formInputValidity, setFormInputValidity] = useState({
    streetName: false,
    streetNumber: false,
    postalCode: false,
    city: false,
    fullName: false,
    email: false,
    phoneNumber: false,
  });

  const [enteredNameTouched, setEnteredNameTouched] = useState({
    streetName: false,
    streetNumber: false,
    postalCode: false,
    city: false,
    fullName: false,
    email: false,
    phoneNumber: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const enteredStreetNameIsValid = hasLetters(enteredInputValue.streetName);
    const enteredStreetNumberIsValid = hasNumbers(
      enteredInputValue.streetNumber,
    );
    const enteredCodeIsValid = isPostalCode(enteredInputValue.postalCode);
    const enteredCityIsValid = hasLetters(enteredInputValue.city);
    const enteredFullNameIsValid = isFullName(enteredInputValue.fullName);
    const enteredEmailIsValid = isEmail(enteredInputValue.email);
    const enteredPhoneNumberIsValid = isPhoneNumber(
      enteredInputValue.phoneNumber,
    );

    setFormInputValidity({
      streetName: !enteredStreetNameIsValid && enteredNameTouched.streetName,
      streetNumber:
        !enteredStreetNumberIsValid && enteredNameTouched.streetNumber,
      postalCode: !enteredCodeIsValid && enteredNameTouched.postalCode,
      city: !enteredCityIsValid && enteredNameTouched.city,
      fullName: !enteredFullNameIsValid && enteredNameTouched.fullName,
      email: !enteredEmailIsValid && enteredNameTouched.email,
      phoneNumber: !enteredPhoneNumberIsValid && enteredNameTouched.phoneNumber,
    });
  }, [enteredInputValue, enteredNameTouched]);

  const inputChangeHandler = (e) => {
    setEnteredInputValue((prevState) => {
      let updatedState = { ...prevState };
      updatedState[e.target.id] = e.target.value;
      return updatedState;
    });
    console.log(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched((prevState) => {
      let updatedState = { ...prevState };
      updatedState[e.target.id] = true;
      return updatedState;
    });
    // console.log(enteredNameTouched);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let isValid = true;
    for (const [key, value] of Object.entries(formInputValidity)) {
      setEnteredNameTouched((prevState) => {
        let updatedState = { ...prevState };
        updatedState[key] = true;
        return updatedState;
      });
      console.log(value);
      isValid *= value;
    }
    console.log(enteredNameTouched, formInputValidity);

    console.log(isValid);

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
              label='Street name'
              placeholder='Type street name'
              type='text'
              id='streetName'
              validity={!formInputValidity.streetName}
              onBlur={nameInputBlurHandler}
              onChange={inputChangeHandler}
              value={enteredInputValue.streetName}
            />
            <FormInput
              label='House number'
              placeholder='Type house number'
              type='text'
              id='streetNumber'
              validity={!formInputValidity.streetNumber}
              onBlur={nameInputBlurHandler}
              onChange={inputChangeHandler}
              value={enteredInputValue.streetNumber}
            />
            <FormInput
              label='Postcode'
              placeholder='Type your postal code'
              type='text'
              id='postalCode'
              validity={!formInputValidity.postalCode}
              onBlur={nameInputBlurHandler}
              onChange={inputChangeHandler}
              value={enteredInputValue.postalCode}
            />
            <FormInput
              label='City'
              placeholder='Type your city'
              type='text'
              id='city'
              validity={!formInputValidity.city}
              onBlur={nameInputBlurHandler}
              onChange={inputChangeHandler}
              value={enteredInputValue.city}
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
              validity={!formInputValidity.fullName}
              onBlur={nameInputBlurHandler}
              onChange={inputChangeHandler}
              value={enteredInputValue.fullName}
            />
            <FormInput
              label='E-mail'
              placeholder='yourname@email.com'
              type='text'
              id='email'
              validity={!formInputValidity.email}
              onBlur={nameInputBlurHandler}
              onChange={inputChangeHandler}
              value={enteredInputValue.email}
            />
            <FormInput
              label='Phone number'
              placeholder='Type your phone number'
              type='text'
              id='phoneNumber'
              validity={!formInputValidity.phoneNumber}
              onBlur={nameInputBlurHandler}
              onChange={inputChangeHandler}
              value={enteredInputValue.phoneNumber}
            />
          </div>
        </div>
      </div>
      <Button name='Order' totalAmount={props.totalAmount} />
    </form>
  );
};

export default Checkout;
