import React, { useState } from 'react';

import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { Title } from '../../atoms/Title/Title';
import { Error } from '../../atoms/Error/Error';
import { Form, SubContainer } from './style';
import PropTypes from 'prop-types';

export const CustomMeal = ({ mealsList, setMealsList }) => {
  const [customMeal, setCustomMeal] = useState('');
  const [error, setError] = useState(false);

  const setMeals = (e) => {
    e.preventDefault();
    if (customMeal.length >= 3 && customMeal.length <= 20) {
      setError(false);
      setCustomMeal('');
      if (!mealsList.includes(customMeal)) {
        setMealsList((prevState) => [...prevState, customMeal]);
      }
    } else {
      setError(true);
    }
  };

  return (
    <Form onSubmit={setMeals}>
      <Title>add custom meal</Title>
      {error && <Error>Enter the name between 3 and 20 characters</Error>}
      <SubContainer>
        <Label htmlFor="meal-name">Custom meal:</Label>
        <Input
          id="meal-name"
          type="text"
          placeholder="e.g. snacks"
          onChange={(e) => {
            setCustomMeal(e.target.value);
          }}
          value={customMeal}
        />
        <Button size="small" color="blue">
          add
        </Button>
      </SubContainer>
    </Form>
  );
};

CustomMeal.propTypes = {
  mealsList: PropTypes.array.isRequired,
  setMealsList: PropTypes.func.isRequired,
};
