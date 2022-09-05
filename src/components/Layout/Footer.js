import React from 'react';

import logo from '../../assets/logo.png';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <a href='/'>
          <img src={logo} alt='FeedMeUp logo' />
        </a>
        <h1>FeedMeUp</h1>
      </div>
      <div className={classes.creator}>Created by Jakub Jankowski</div>
    </footer>
  );
};

export default Footer;
