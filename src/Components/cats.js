import React from 'react';
import SearchForm from './SearchForm';
import Main from './Main';
import Navigation from './Navigation';

// custom category component from Links list
const cats = () => (
  <div>
    <SearchForm />
    <Navigation />
    <Main query="cats" />
  </div>
);

export default cats;