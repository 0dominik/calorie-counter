import React, { useState, useEffect } from 'react';
import { H2 } from './style';
import PropTypes from 'prop-types';

export const Sum = ({ total }) => {
  const [sum, setSum] = useState({ kcal: 0, protein: 0, carb: 0, fat: 0 });

  useEffect(() => {
    setSum(
      total.reduce(
        (tot, obj) => ({
          kcal: obj.values.kcal + tot.kcal,
          protein: obj.values.protein + tot.protein,
          carb: obj.values.carb + tot.carb,
          fat: obj.values.fat + tot.fat,
        }),
        { kcal: 0, protein: 0, carb: 0, fat: 0 }
      )
    );
  }, [total]);

  return (
    <H2>
      Today you have eaten <b>{sum.kcal}</b> kcal, <b>{sum.protein} g</b> protein,
      <b> {sum.carb} g </b>
      carbohydrates, <b>{sum.fat} g</b> fat
    </H2>
  );
};

Sum.propTypes = {
  total: PropTypes.array.isRequired,
};
