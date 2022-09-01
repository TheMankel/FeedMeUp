import React from 'react';

import HeaderIcon from './HeaderIcon';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <HeaderIcon />
          <h1>FeedMeUp</h1>
        </div>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='Tasty and delicious food' />
      </div>
    </>
  );
};

export default Header;
