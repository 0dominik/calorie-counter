import React from 'react';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';

import PropTypes from 'prop-types';

const SearchForm = ({ fetchData, query, setQuery, mealName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor={`search-${mealName}`} text="Food name:" />
      <Input
        size="medium"
        id={`search-${mealName}`}
        type="text"
        placeholder="e.g. apple"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button text="search" type="submit" color="teal" size="small" />
    </form>
  );
};

SearchForm.propTypes = {
  fetchData: PropTypes.func.isRequired,
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
  mealName: PropTypes.string.isRequired,
};

SearchForm.defaultProps = {
  query: '',
};

export default SearchForm;
