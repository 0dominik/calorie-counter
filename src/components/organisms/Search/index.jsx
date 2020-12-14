import React, { useState, useEffect } from 'react';
import theme from '../../../theme/theme';

import Error from '../../atoms/Error';
import FoodElement from '../../molecules/FoodElement';
import PageNav from '../../molecules/PageNav';
import SearchForm from '../../molecules/SearchForm';

import { Container } from './style';
import MoonLoader from 'react-spinners/MoonLoader';

import { fetchFood } from '../../../api';
import { ID, DEFAULT_QUANTITY } from '../../../constants';
import PropTypes from 'prop-types';

const Search = ({ meal, setMeal, mealName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [food, setFood] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [query, setQuery] = useState('');

  const fetchData = async (page) => {
    setIsLoading(true);
    setError('');

    const data = await fetchFood(page, query);

    if (!data) {
      setError('API error');
      setIsLoading(false);
      return;
    }

    const { foods } = data;
    setIsLoading(false);
    setTotalPages(data.totalPages);

    const foodList = [];

    foods.forEach((food) => {
      if (food.foodNutrients.length) {
        const protein = food.foodNutrients.find((obj) => obj.nutrientId === ID.protein);
        const carb = food.foodNutrients.find((obj) => obj.nutrientId === ID.carb);
        const fat = food.foodNutrients.find((obj) => obj.nutrientId === ID.fat);

        if (protein && fat && carb) {
          foodList.push({
            id: food.fdcId,
            name: food.description,
            kcal: food.foodNutrients.find((obj) => obj.nutrientId === ID.kcal).value,
            protein: protein.value,
            fat: fat.value,
            carb: carb.value,
            brand: food.brandOwner,
            ingredients: food.ingredients,
          });
        }
      }
    });

    if (foodList.length === 0) {
      setError('Incorrect food!');
    } else {
      setError('');
    }
    setFood(foodList);
  };

  useEffect(() => {
    if (query.length >= 3) {
      fetchData(1);
      setCurrentPage(1);
    } else {
      setFood([]);
      setError('');
    }
  }, [query]);

  return (
    <Container>
      <SearchForm fetchData={fetchData} setQuery={setQuery} query={query} mealName={mealName} />
      {error && <Error text={error} />}
      {isLoading ? (
        <MoonLoader color={theme.colors.blue} size={50} />
      ) : (
        <>
          <ul>
            {food.map((product) => (
              <FoodElement
                food={{ ...product, quantity: DEFAULT_QUANTITY }}
                isSearch
                key={product.id}
                meal={meal}
                setMeal={setMeal}
                mealName={mealName}
                setError={setError}
              />
            ))}
          </ul>
          {food.length > 0 && (
            <PageNav
              fetchData={fetchData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          )}
        </>
      )}
    </Container>
  );
};

Search.propTypes = {
  setMeal: PropTypes.func.isRequired,
  mealName: PropTypes.string.isRequired,
  meal: PropTypes.array.isRequired,
};

export default Search;
