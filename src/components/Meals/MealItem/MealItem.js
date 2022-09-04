import React, { useState } from 'react';
import Meal from '../Meal';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const [mealVisible, setMealVisible] = useState(false);
  const price = `$${props.price.toFixed(2)}`;

  const openMealHandler = () => {
    setMealVisible(true);
  };

  const closeMealHandler = () => {
    setMealVisible(false);
  };

  return (
    <>
      {mealVisible && <Meal onClose={closeMealHandler} item={{ ...props }} />}
      <li className={classes.meal} onClick={openMealHandler}>
        <div className={classes.item}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div className={classes.image}>
          <img src={props.image} alt={`Fresh and tasty ${props.name}`} />
        </div>
      </li>
    </>
  );
};

export default MealItem;
