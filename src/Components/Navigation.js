import React from 'react';

import { Button } from 'react-bootstrap';

const Navigation = props => (
        <nav class="main-nav">
        <ul>
        <Button><a href='#'>Cats</a></Button>
        <Button><a href='#'>Dogs</a></Button>
        <Button><a href='#'>Computers</a></Button>
        </ul>
    </nav>
    );

export default Navigation;