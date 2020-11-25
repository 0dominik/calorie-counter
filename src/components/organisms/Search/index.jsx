import React, { useState, useEffect } from "react";
import theme from "../../../theme/theme";

import Error from "../../atoms/Error";
import FoodElement from "../../molecules/FoodElement";
import PageNav from "../../molecules/PageNav";
import SearchForm from "../../molecules/SearchForm";

import { Container } from "./style";
import MoonLoader from "react-spinners/MoonLoader";

import { fetchFood } from "../../../api/fetchFood";

const Search = ({ setMeal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [food, setFood] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [query, setQuery] = useState("");

  const KCAL_ID = 1008;
  const PROTEIN_ID = 1003;
  const FAT_ID = 1004;
  const CARB_ID = 1005;

  const fetchData = async (page) => {
    setIsLoading(true);
    setError("");

    const data = await fetchFood(page, query);

    if (!data) {
      setError("API error");
      setIsLoading(false);
      return;
    }

    const foods = data.foods;
    setIsLoading(false);
    setTotalPages(data.totalPages);

    const foodList = [];

    foods.forEach((food) => {
      if (food.foodNutrients.length) {
        const protein = food.foodNutrients.find((object) => object.nutrientId === PROTEIN_ID);
        const fat = food.foodNutrients.find((object) => object.nutrientId === FAT_ID);
        const carb = food.foodNutrients.find((object) => object.nutrientId === CARB_ID);

        if (protein && fat && carb) {
          foodList.push({
            id: food.fdcId,
            name: food.description,
            kcal: food.foodNutrients.find((object) => object.nutrientId === KCAL_ID).value,
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
      setError("Incorrect food!");
    } else {
      setError("");
    }
    setFood(foodList);
  };

  useEffect(() => {
    if (query.length >= 3) {
      fetchData(1);
      setCurrentPage(1);
    } else {
      setFood([]);
      setError("");
    }
  }, [query]);

  const nextPage = () => {
    setCurrentPage((prevValue) => prevValue + 1);
    fetchData(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevValue) => prevValue - 1);
    fetchData(currentPage - 1);
  };

  return (
    <Container>
      <SearchForm fetchData={fetchData} setQuery={setQuery} query={query} />
      {error && <Error text={error} />}
      {isLoading ? (
        <MoonLoader color={theme.colors.blue} size={50} />
      ) : (
        <>
          <ul>
            {food.map((product) => (
              <FoodElement
                food={{ ...product, quantity: 100 }}
                isSearch
                key={product.id}
                setMeal={setMeal}
                setError={setError}
              />
            ))}
          </ul>
          {food.length > 0 && (
            <PageNav
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </>
      )}
    </Container>
  );
};
export default Search;
