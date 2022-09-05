import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import logo from '../../assets/logo.png';
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
    </>
  );
};

export default Header;
