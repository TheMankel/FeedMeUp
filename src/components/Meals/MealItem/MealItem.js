import React, { useEffect, useState } from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import Meal from '../Meal';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const [mealVisible, setMealVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      const res = await fetch(props.image);
      const blob = await res.blob();

      const markup = (
        <img
          src={URL.createObjectURL(blob)}
          alt={`Fresh and tasty ${props.name}`}
        />
      );
      setImage(markup);

      setIsLoading(false);
    };

    loadImage();
  });

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
          {!isLoading && image}
          {isLoading && <Spinner />}
        </div>
      </li>
    </>
  );
};

export default MealItem;
