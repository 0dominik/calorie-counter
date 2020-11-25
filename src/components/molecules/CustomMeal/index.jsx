import React, { useState } from "react";

import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import Title from "../../atoms/Title";
import Error from "../../atoms/Error";
import { Form, SubContainer } from "./style";

const AddMeal = ({ mealsList, setMealsList }) => {
  const [customMeal, setCustomMeal] = useState("");
  const [error, setError] = useState(false);

  const setMeals = (e) => {
    e.preventDefault();
    if (customMeal.length >= 3 && customMeal.length <= 20) {
      setError(false);
      setCustomMeal("");
      if (!mealsList.includes(customMeal)) {
        setMealsList((prevState) => [...prevState, customMeal]);
      }
    } else {
      setError(true);
    }
  };

  return (
    <Form onSubmit={setMeals}>
      <Title text="add custom meal" />
      {error && <Error text={"Enter the name between 3 and 20 characters"} />}
      <SubContainer>
        <Label htmlFor="meal-name" text={"Custom meal:"} />
        <Input
          id="meal-name"
          size="large"
          type="text"
          placeholder="meal name"
          onChange={(e) => {
            setCustomMeal(e.target.value);
          }}
          value={customMeal}
        />
        <Button size="small" text="add" color="blue" />
      </SubContainer>
    </Form>
  );
};

export default AddMeal;
