import React from 'react';
import { Button } from 'react-bootstrap';

const Navigation = props => (
        <nav className="main-nav">
        <ul>
        <Button className="btn-primary buttonNew">Cats</Button>
        <Button className="btn-primary buttonNew">Dogs</Button>
        <Button className="btn-primary buttonNew">Computers</Button>
        </ul>
    </nav>
    );

export default Navigation;