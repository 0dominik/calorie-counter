import React, { useState, useEffect } from 'react';
import { FoodElement } from '../../molecules/FoodElement/FoodElement';
import { Title } from '../../atoms/Title/Title';
import { Button } from '../../atoms/Button/Button';
import { Error } from '../../atoms/Error/Error';
import { Search } from '../Search/Search';
import { Container, Sum, Info, ButtonContainer } from './style';
import PropTypes from 'prop-types';

import { FaRegTrashAlt } from 'react-icons/fa';

export const Meal = ({ mealName, setTotal, setMealsList }) => {
  const [meal, setMeal] = useState(JSON.parse(localStorage.getItem(mealName)) || []);
  const [open, setOpen] = useState(false);
  const [sum, setSum] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem(mealName, JSON.stringify(meal));
  }, [meal]);

  useEffect(() => {
    let kcal = 0;
    let protein = 0;
    let fat = 0;
    let carb = 0;
    meal.forEach((food) => {
      kcal += Math.round((food.kcal * food.quantity) / 100);
      protein += Math.round((food.protein * food.quantity) / 100);
      fat += Math.round((food.fat * food.quantity) / 100);
      carb += Math.round((food.carb * food.quantity) / 100);
    });
    setSum({ kcal, protein, fat, carb });

    setTotal((prevState) => [
      ...prevState.filter((meal) => meal.name !== mealName),
      { name: mealName, values: { kcal, protein, fat, carb } },
    ]);
  }, [meal]);

  const deleteMeal = () => {
    setMealsList((prevState) => prevState.filter((name) => name !== mealName));
    setTotal((prevState) => prevState.filter((meal) => meal.name !== mealName));
    localStorage.removeItem(mealName);
  };

  return (
    <Container>
      <Title text={mealName} />
      {error && <Error>Quantity cannot be negative</Error>}
      {meal.length ? (
        <ul>
          {meal.map((food) => (
            <FoodElement
              meal={meal}
              key={food.id}
              food={food}
              setMeal={setMeal}
              setError={setError}
              mealName={mealName}
            />
          ))}
        </ul>
      ) : (
        <Info>You haven&apos;t added any food yet!</Info>
      )}
      <ButtonContainer>
        <Button
          type="button"
          color="blue"
          onClick={() => {
            setOpen((prevState) => !prevState);
          }}
        >
          {!open ? 'add' : 'hide'}
        </Button>
        <Button color="red" onClick={() => setMeal([])} size="large">
          reset
        </Button>
        <Button onClick={deleteMeal} color="red" hasIcon size="large">
          <FaRegTrashAlt />
        </Button>
      </ButtonContainer>
      <Sum>
        Sum: {sum.kcal} kcal, {sum.protein}P, {sum.carb}C, {sum.fat}F
      </Sum>
      {open && <Search meal={meal} setMeal={setMeal} mealName={mealName} />}
    </Container>
  );
};

Meal.propTypes = {
  mealName: PropTypes.string.isRequired,
  setTotal: PropTypes.func.isRequired,
  setMealsList: PropTypes.func.isRequired,
};
