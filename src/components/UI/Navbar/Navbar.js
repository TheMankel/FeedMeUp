import React from 'react';

import CloseIcon from '../Icons/CloseIcon';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <h2>{props.label}</h2>
      <span onClick={props.onClose}>
        <CloseIcon />
      </span>
    </div>
  );
};

export default Navbar;
