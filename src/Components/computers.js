import React from 'react';
import SearchForm from './SearchForm';
import Main from './Main';
import Navigation from './Navigation';

// custom category component from Links list
const computers = () => (
  <div>
    <SearchForm />
    <Navigation />
    <Main query="computers" />
  </div>
);

export default computers;