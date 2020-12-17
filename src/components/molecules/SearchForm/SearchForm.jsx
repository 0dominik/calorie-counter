import React from 'react';

import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { Label } from '../../atoms/Label/Label';

import PropTypes from 'prop-types';

export const SearchForm = ({ fetchData, query, setQuery, mealName, isLoading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoading) {
      fetchData(1);
    }
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
      <Button type="submit" color="teal" size="small">
        search
      </Button>
    </form>
  );
};

SearchForm.propTypes = {
  fetchData: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  mealName: PropTypes.string.isRequired,
};
