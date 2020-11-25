import React, { useState, useEffect } from "react";
import { H2 } from "./style";

const Sum = ({ total }) => {
  const [sum, setSum] = useState({ kcal: 0, protein: 0, carb: 0, fat: 0 });

  useEffect(() => {
    let kcal = 0;
    let protein = 0;
    let fat = 0;
    let carb = 0;
    Object.values(total).forEach((meal) => {
      kcal += meal.kcal;
      protein += meal.protein;
      fat += meal.fat;
      carb += meal.carb;
    });
    setSum({ kcal, protein, fat, carb });
  }, [total]);

  return (
    <H2>
      Today you have eaten <b>{sum.kcal}</b> kcal, <b>{sum.protein} g</b> protein,
      <b> {sum.carb} g </b>
      carbohydrates, <b>{sum.fat} g</b> fat
    </H2>
  );
};

export default Sum;
