import React, { useEffect, useState } from 'react';

import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        'https://react-rest-2137-default-rtdb.firebaseio.com/meals.json',
      );

      if (!res.ok) throw new Error('Something went wrong!');

      const data = await res.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          image: data[key].image,
        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals().catch((err) => {
      setHttpError(err.message);
    });
  }, []);

  if (httpError)
    return (
      <section className={classes.meals}>
        <Card>
          <ErrorMessage info={httpError} />
        </Card>
      </section>
    );

  const mealsList = meals.map((meal) => (
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
        {!httpError && <ul>{mealsList}</ul>}
        {httpError && <ErrorMessage info={httpError} />}
      </Card>
    </section>
  );
};

export default AvailableMeals;
