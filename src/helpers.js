// const round = (number, precision) => {
//   return Math.round((food.fat * food.quantity) / 100);
// }

export const getLocalStorage = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

export const debounce = (func) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, 500);
  };
};
