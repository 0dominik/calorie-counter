import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import theme from './theme/theme';

import { Header } from './components/organisms/Header/Header';
import { CustomMeal } from './components/organisms/CustomMeal/CustomMeal';
import { Sum } from './components/organisms/Sum/Sum';
import { Meal } from './components/organisms/Meal/Meal';

import { DEFAULT_MEALS } from './constants';
import { getLocalStorage } from './helpers';

const App = () => {
  const [mealsList, setMealsList] = useState(
    JSON.parse(localStorage.getItem('mealsList')) || DEFAULT_MEALS
  );

  useEffect(() => {
    localStorage.setItem('mealsList', JSON.stringify(mealsList));
  }, [mealsList]);

  const [total, setTotal] = useState([]);

  useEffect(() => {
    const date = getLocalStorage('date');
    const newDate = new Date();

    const [day, month, year] = [newDate.getDate(), newDate.getMonth() + 1, newDate.getFullYear()];

    if (date && (day > date.day || month > date.month || year > date.year)) {
      setMealsList(DEFAULT_MEALS);
      localStorage.clear();
    }

    localStorage.setItem('date', JSON.stringify({ day, month, year }));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Sum total={total} />
        {mealsList.map((meal) => (
          <Meal key={meal} setTotal={setTotal} setMealsList={setMealsList} mealName={meal} />
        ))}
        <CustomMeal setMealsList={setMealsList} mealsList={mealsList} />
      </div>
    </ThemeProvider>
  );
};

export default App;
