import { URL, API_KEY, PAGE_SIZE } from './constants';

export const fetchFood = async (page, query) => {
  try {
    const res = await fetch(
      `${URL}?query=${query}&api_key=${API_KEY}&pageSize=${PAGE_SIZE}&pageNumber=${page}`
    );
    const data = await res.json();

    return data;
  } catch {
    return false;
  }
};
