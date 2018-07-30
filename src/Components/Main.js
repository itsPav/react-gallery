import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import PhotoContainer from './PhotoContainer';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      imgs: [],
      isLoading: true
    }
  }

    componentWillMount () {
      this.setState({
        query: this.props.query 
                ? 
                this.props.query 
                :
                this.props.match.params.query
      })
    }
  
    componentDidMount() {
      this.performSearch(this.state.query);
    }
  
    performSearch = (query) => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=10&format=json&nojsoncallback=1`) 
      .then(response => {
        console.log(response);
        this.setState({
          imgs: response.data.photos.photo,
          isLoading: false
        })
      })
      .catch(error => { 
        console.log('Error fetching and parsing data', error);
      });
    }
  
    render() {
      return (
        <div>
          { (this.state.isLoading) 
              ? <h1>Searching...</h1> 
              : <PhotoContainer 
                imgs = {this.state.imgs} 
                query={this.state.query} />
          }
        </div>
      );
    }
}