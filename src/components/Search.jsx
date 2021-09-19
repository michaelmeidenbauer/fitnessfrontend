/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { sliceIntoChunks } from '../helpers/data';

const Search = ({ searchItem, thingsToSearch, updateWithResult }) => {
  const [searchTerm, updateSearchTerm] = useState(null);
  console.log('things to search: ', thingsToSearch);
  const clickHandler = () => {
    const searchResult = thingsToSearch.filter((activity) => activity.name.includes(searchTerm) || activity.description.includes(searchTerm));
    const chunkedResults = sliceIntoChunks(searchResult, 50);
    updateWithResult(chunkedResults);
  };
  return (
    <FormControl>
      <InputLabel htmlFor="search-input">Search</InputLabel>
      <Input
        id="search-input"
        onChange={(e) => {
          updateSearchTerm(e.target.value);
        }}
      />
      <Button onClick={clickHandler}>
        Search {searchItem}
      </Button>
    </FormControl>
  );
};

Search.propTypes = {
  searchItem: propTypes.string.isRequired,
  updateWithResult: propTypes.func.isRequired,
  thingsToSearch: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Search;
