import React from "react";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";

const SearchForm = ({ fetchData, query, setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="food" text="Food name:" />
      <Input
        size="medium"
        id="food"
        type="text"
        placeholder="e.g. apple"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button text="search" type="submit" color="teal" size="small" />
    </form>
  );
};

export default SearchForm;
