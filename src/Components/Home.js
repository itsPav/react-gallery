import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import Main from './Main';

const Home = props => (
    <div className="">
        <SearchForm />
        <Navigation />
        <Main {...props} />
    </div>
);

export default Home;