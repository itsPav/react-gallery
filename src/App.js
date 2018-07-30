import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Components/Home';

import cats from './Components/cats';
import dogs from './Components/dogs';
import computers from './Components/computers';

import errorPage from './Components/errorPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        
          <Switch>

            <Route exact path='/' render={(props) => (
              <Home query="Robots"/>)
            }/>

            <Route path='/search/:query' render={(props) => (
              <Home {...props} />)
            }/>

            <Route exact path="/" component={Home} />
            <Route path="/cats" render={cats} />
            <Route path="/dogs" component={dogs} />
            <Route path="/computers" component={computers} />

            <Route component={errorPage} />
            
          </Switch>
        </div>
      </BrowserRouter>  
    );
  }
}