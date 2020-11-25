const URL = "https://api.nal.usda.gov/fdc/v1/foods/search";
const API_KEY = process.env.REACT_APP_API_KEY;
const PAGE_SIZE = 5;

export const fetchFood = async (page, query) => {
  try {
    const res = await fetch(
      `${URL}?query=${query}&api_key=${API_KEY}&pageSize=${PAGE_SIZE}&pageNumber=${page}`,
    );
    const data = await res.json();

    return data;
  } catch {
    return false;
  }
};
