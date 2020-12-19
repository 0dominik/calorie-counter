export const round = (number, precision) => {
  return Math.round(number / Math.pow(10, precision));
};

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
