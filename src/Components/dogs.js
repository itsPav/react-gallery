import React from 'react';
import SearchForm from './SearchForm';
import Main from './Main';
import Navigation from './Navigation';

// custom category component from Links list
const dogs = () => (
  <div>
    <SearchForm />
    <Navigation />
    <Main query="dogs" />
  </div>
);

export default dogs;