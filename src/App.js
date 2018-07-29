import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import Navigation from './Components/Navigation';
import PhotoContainer from './Components/PhotoContainer';
import apiKey from './config';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  } 

  performSearch = (query = 'cats') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=10&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imgs: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div className="container">
                
        <SearchForm onSearch={this.performSearch}/>

        <Navigation />

        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <PhotoContainer data={this.state.imgs} />
        }

      </div>
    );
  }
}