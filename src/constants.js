export const ID = {
  kcal: 1008,
  protein: 1003,
  carb: 1004,
  fat: 1005,
};

export const URL = 'https://api.nal.usda.gov/fdc/v1/foods/search';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const PAGE_SIZE = 5;
export const DEFAULT_QUANTITY = 100;
export const DEFAULT_MEALS = ['breakfast', 'lunch', 'dinner'];
