import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import theme from './theme/theme';

import Header from './components/molecules/Header';
import CustomMeal from './components/molecules/CustomMeal';
import Sum from './components/molecules/Sum';
import Meal from './components/organisms/Meal';

const App = () => {
  const [mealsList, setMealsList] = useState(
    JSON.parse(localStorage.getItem('mealsList')) || ['breakfast', 'lunch', 'dinner']
  );

  useEffect(() => {
    localStorage.setItem('mealsList', JSON.stringify(mealsList));
  }, [mealsList]);

  const [total, setTotal] = useState([]);

  useEffect(() => {
    const date = JSON.parse(localStorage.getItem('date'));
    const newDate = new Date();

    const [day, month, year] = [newDate.getDate(), newDate.getMonth() + 1, newDate.getFullYear()];

    if (date) {
      if (day > date.day || month > date.month || year > date.year) {
        setMealsList(['breakfast', 'lunch', 'dinner']);
        localStorage.clear();
      }
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
