import React, { useState, useEffect } from "react";
import FoodElement from "../../molecules/FoodElement";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import Error from "../../atoms/Error";
import Search from "../Search";
import { Container, Sum, Info, ButtonContainer } from "./style";

import { FaRegTrashAlt } from "react-icons/fa";

const Meal = ({ mealName, setTotal, changeDate, setMealsList }) => {
  const [meal, setMeal] = useState(JSON.parse(localStorage.getItem(mealName)) || []);
  const [open, setOpen] = useState(false);
  const [sum, setSum] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (changeDate) {
      setMeal([]);
    }
  }, [changeDate]);

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
    setTotal((prevState) => ({
      ...prevState,
      [mealName]: { ...{ kcal, protein, fat, carb } },
    }));
  }, [meal]);

  return (
    <Container>
      <Title text={mealName} />
      {error && <Error text="Quantity cannot be negative" />}
      {meal.length ? (
        <ul>
          {meal.map((food) => (
            <FoodElement
              key={food.id}
              food={food}
              meals={meal}
              setMeal={setMeal}
              setError={setError}
              mealName={mealName}
            />
          ))}
        </ul>
      ) : (
        <Info>You haven't added any food yet!</Info>
      )}
      <ButtonContainer>
        <Button
          text={!open ? "add" : "hide"}
          type="button"
          color="blue"
          onClick={() => {
            setOpen((prevState) => !prevState);
          }}
        />
        <Button color="red" onClick={() => setMeal([])} size="large" text="reset" />
        <Button
          onClick={() => {
            setMealsList((prevState) => prevState.filter((name) => name !== mealName));
            setTotal((prevState) => {
              const newState = prevState;
              delete prevState[mealName];
              return { ...newState };
            });
            setMeal([]);
            localStorage.removeItem(mealName);
          }}
          color="red"
          text={<FaRegTrashAlt />}
          icon
          size="large"
        />
      </ButtonContainer>
      {open && <Search setMeal={setMeal} />}
      <Sum>
        Sum: {sum.kcal} kcal, {sum.protein}P, {sum.carb}C, {sum.fat}F
      </Sum>
    </Container>
  );
};

export default Meal;
