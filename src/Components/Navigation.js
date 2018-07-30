import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// component for the list of categories
const Navigation = () => (
  <div className="main-nav"> 
    <Button className="btn-primary buttonNew"><NavLink to="/cats">Cats</NavLink></Button>
    <Button className="btn-primary buttonNew"><NavLink to="/dogs">Dogs</NavLink></Button>
    <Button className="btn-primary buttonNew"><NavLink to="/computers">Computers</NavLink></Button>   
  </div>
);

export default Navigation;