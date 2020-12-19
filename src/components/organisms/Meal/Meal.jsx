import React, { useState, useEffect } from 'react';
import { FoodElement } from '../../molecules/FoodElement/FoodElement';
import { Title } from '../../atoms/Title/Title';
import { Button } from '../../atoms/Button/Button';
import { Error } from '../../atoms/Error/Error';
import { Search } from '../Search/Search';
import { Container, Sum, Info, ButtonContainer } from './style';
import { FaRegTrashAlt } from 'react-icons/fa';
import { round } from '../../../helpers';
import PropTypes from 'prop-types';

export const Meal = ({ mealName, setTotal, setMealsList }) => {
  const [meal, setMeal] = useState(JSON.parse(localStorage.getItem(mealName)) || []);
  const [open, setOpen] = useState(false);
  const [sum, setSum] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem(mealName, JSON.stringify(meal));
  }, [meal]);

  useEffect(() => {
    const summedObj = meal.reduce(
      (prev, obj) => ({
        kcal: round(obj.kcal * obj.quantity, 2) + prev.kcal,
        protein: round(obj.protein * obj.quantity, 2) + prev.protein,
        carb: round(obj.carb * obj.quantity, 2) + prev.carb,
        fat: round(obj.fat * obj.quantity, 2) + prev.fat,
      }),
      { kcal: 0, protein: 0, carb: 0, fat: 0 }
    );

    setSum(summedObj);
    setTotal((prevState) => [
      ...prevState.filter((meal) => meal.name !== mealName),
      { name: mealName, values: summedObj },
    ]);
  }, [meal]);

  const deleteMeal = () => {
    setMealsList((prevState) => prevState.filter((name) => name !== mealName));
    setTotal((prevState) => prevState.filter((meal) => meal.name !== mealName));
    localStorage.removeItem(mealName);
  };

  return (
    <Container>
      <Title>{mealName}</Title>
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
        <Info>You haven&apos;t added any food yet. Click "search food" button!</Info>
      )}
      <ButtonContainer>
        <Button
          type="button"
          color="blue"
          onClick={() => {
            setOpen((prevState) => !prevState);
          }}
        >
          {!open ? 'search food' : 'hide section'}
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
