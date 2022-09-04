import React from 'react';

import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import sushi from '../../assets/sushi.jpg';
import pizza from '../../assets/pizza.jpg';
import burger from '../../assets/burger.jpg';
import pancake from '../../assets/pancake.jpg';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    image: sushi,
  },
  {
    id: 'm2',
    name: 'Pizza Margherita',
    description: 'Tomatoes, mozzarella cheese, fresh basil',
    price: 16.5,
    image: pizza,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 18.99,
    image: burger,
  },
  {
    id: 'm4',
    name: 'Pancake',
    description: 'Wild berries and chocolate',
    price: 15.99,
    image: pancake,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
