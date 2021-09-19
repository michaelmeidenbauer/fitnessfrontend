/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { sliceIntoChunks } from '../helpers/data';

/**
 * @param {
 * }
 * props
 * searchItem (string): the description of the thing to be search. Used as display text on the button: `Search ${searchItem}`
 * thingsToSearch (array): expected to be an array but technically could be anything based on how you write the event handler.
 * updateWithResult (function): the state pair updater function from the actually displayed list of searchable content in the parent component. Pay attention to how the data needs to be shaped when it's returned back to the parent component.
 * @returns
 * react component duuuuuuuh
 */
const Search = ({ searchItem, thingsToSearch, updateWithResult }) => {
  const [searchTerm, updateSearchTerm] = useState('');
  // switchToClear is just a little indicator that the search bar has just been used and the button should switch to a clear results option. Typing in the search box or clearing with the button both set it back to false.
  const [switchToClear, setSwitchToClear] = useState(false);
  const clickHandler = () => {
    if (!switchToClear) {
      // Set the results to matching results of the search.
      const searchResult = thingsToSearch.filter((activity) => activity.name.includes(searchTerm) || activity.description.includes(searchTerm));
      const chunkedResults = sliceIntoChunks(searchResult, 50);
      updateWithResult(chunkedResults);
      setSwitchToClear(true);
    } else {
      // Set the results to the complete set provided to the search component via the thingsToSearch prop and set the button back to search mode.
      const chunkedFullList = sliceIntoChunks(thingsToSearch, 50);
      updateWithResult(chunkedFullList);
      updateSearchTerm('');
      setSwitchToClear(false);
    }
  };
  return (
    <FormControl>
      <InputLabel htmlFor="search-input">Search</InputLabel>
      <Input
        id="search-input"
        value={searchTerm}
        onChange={(e) => {
          updateSearchTerm(e.target.value);
          setSwitchToClear(false);
        }}
      />
      <Button onClick={clickHandler}>
        {!switchToClear ? `Search ${searchItem}` : 'Clear results'}
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
