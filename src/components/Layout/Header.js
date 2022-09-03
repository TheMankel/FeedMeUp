import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImg from '../../assets/meals.jpg';
import logo from '../../assets/logo.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <a href='/'>
            <img src={logo} alt='FeedMeUp logo' />
          </a>
          <h1>FeedMeUp</h1>
        </div>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;
