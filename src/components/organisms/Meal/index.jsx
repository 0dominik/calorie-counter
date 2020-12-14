import React, { useState, useEffect } from 'react';
import FoodElement from '../../molecules/FoodElement';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import Error from '../../atoms/Error';
import Search from '../Search';
import { Container, Sum, Info, ButtonContainer } from './style';
import PropTypes from 'prop-types';

import { FaRegTrashAlt } from 'react-icons/fa';

const Meal = ({ mealName, setTotal, setMealsList }) => {
  const [meal, setMeal] = useState(JSON.parse(localStorage.getItem(mealName)) || []);
  const [open, setOpen] = useState(false);
  const [sum, setSum] = useState(0);
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
      {error && <Error text="Quantity cannot be negative" />}
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
          text={!open ? 'add' : 'hide'}
          type="button"
          color="blue"
          onClick={() => {
            setOpen((prevState) => !prevState);
          }}
        />
        <Button color="red" onClick={() => setMeal([])} size="large" text="reset" />
        <Button onClick={deleteMeal} color="red" text={<FaRegTrashAlt />} hasIcon size="large" />
      </ButtonContainer>
      {open && <Search meal={meal} setMeal={setMeal} mealName={mealName} />}
      <Sum>
        Sum: {sum.kcal} kcal, {sum.protein}P, {sum.carb}C, {sum.fat}F
      </Sum>
    </Container>
  );
};

Meal.propTypes = {
  mealName: PropTypes.string.isRequired,
  setTotal: PropTypes.func.isRequired,
  setMealsList: PropTypes.func.isRequired,
};

export default Meal;
