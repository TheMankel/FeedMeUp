import LocationIcon from '../UI/Icons/LocationIcon';
import FoodIcon from '../UI/Icons/FoodIcon';
import ShoppingIcon from '../UI/Icons/ShoppingIcon';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <h3>It's as easy as this.</h3>
      <div className={classes.steps}>
        <div className={classes.step}>
          <div className={classes.icon}>
            <LocationIcon />
            <span>1</span>
          </div>
          <div className={classes.description}>
            <h4>Provide your location</h4>
            <p>Fill out your address.</p>
          </div>
        </div>
        <div className={classes.step}>
          <div className={classes.icon}>
            <FoodIcon />
            <span>2</span>
          </div>
          <div className={classes.description}>
            <h4>Choose your meal</h4>
            <p>Browse through many restaurants and cuisines.</p>
          </div>
        </div>
        <div className={classes.step}>
          <div className={classes.icon}>
            <ShoppingIcon />
            <span>3</span>
          </div>
          <div className={classes.description}>
            <h4>Pay and get your food</h4>
            <p>Pay using various payment methods.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealsSummary;
