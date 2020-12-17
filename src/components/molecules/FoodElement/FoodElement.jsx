import React, { useState, useEffect } from 'react';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { StyledFoodElement, ButtonContainer, Unit, Container, Ingredients } from './style';
import { FaRegTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const FoodElement = ({ food, meal, setMeal, setError, mealName, isSearch = false }) => {
  const [quantity, setQuantity] = useState(food.quantity);
  const [showIngredients, setShowIngredients] = useState(false);

  useEffect(() => {
    if (!isSearch) {
      setQuantity(food.quantity);
    }
  }, [meal]);

  const setFood = ({ id, name, kcal, protein, fat, carb, quantity }) => {
    const index = meal.findIndex((food) => food.id === id);
    setError('');
    if (quantity < 0) {
      setError('Quantity cannot be negative');
    } else if (index !== -1) {
      setMeal((prevState) =>
        prevState.map((food) => (food.id === id ? { ...food, quantity } : food))
      );
    } else {
      setMeal((prevState) => [
        ...prevState,
        {
          id,
          name,
          quantity,
          kcal,
          protein,
          carb,
          fat,
        },
      ]);
    }
  };

  const deleteFood = (food) => {
    setMeal((prevState) => prevState.filter((el) => el.id !== food.id));
  };

  return (
    <StyledFoodElement>
      <Container>
        <label htmlFor={`${mealName}${food.id}${isSearch}`}>
          {food.name} |{' '}
          {isSearch
            ? `${Math.round(food.kcal)} kcal per 100g `
            : `${Math.round((food.kcal * food.quantity) / 100)} kcal `}
          {`| ${Math.round((food.protein * food.quantity) / 10) / 10}P,  ${
            Math.round((food.carb * food.quantity) / 10) / 10
          }C,  ${Math.round((food.fat * food.quantity) / 10) / 10}F `}
          {food.brand && ` | ${food.brand} `}
        </label>
        <ButtonContainer>
          <Input
            id={`${mealName}${food.id}${isSearch}`}
            type="number"
            size="small"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Unit>g</Unit>
          <Button
            type="button"
            color="blue"
            size="small"
            onClick={() => {
              setFood({ ...food, quantity: quantity });
            }}
          >
            set
          </Button>
          {!isSearch && (
            <Button
              hasIcon
              type="button"
              color="red"
              size="small"
              onClick={() => {
                deleteFood({ ...food, quantity: quantity });
              }}
            >
              <FaRegTrashAlt />
            </Button>
          )}
        </ButtonContainer>
        {food.ingredients && (
          <Button
            onClick={() => setShowIngredients((prevState) => !prevState)}
            size="small"
            color="teal"
            type="button"
          >
            {showIngredients ? 'Hide ingredients' : 'Show ingredients'}
          </Button>
        )}
      </Container>
      {showIngredients && (
        <Ingredients>
          <b>Ingredients</b>: {food.ingredients}
        </Ingredients>
      )}
    </StyledFoodElement>
  );
};

FoodElement.propTypes = {
  food: PropTypes.object.isRequired,
  setMeal: PropTypes.func.isRequired,
  isSearch: PropTypes.bool,
  setError: PropTypes.func.isRequired,
  mealName: PropTypes.string.isRequired,
  meal: PropTypes.array.isRequired,
};
