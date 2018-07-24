import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import Navigation from './Components/Navigation';
import PhotoContainer from './Components/PhotoContainer';

class App extends Component {

  render() {
    return (
      <div class="container">
            
        <SearchForm />

        <Navigation />

        <PhotoContainer />

      </div>
    );
  }
}

export default App;
