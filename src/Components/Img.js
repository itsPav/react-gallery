import React from 'react';

const Img = props => (
    <li className="img-wrap">
        <img src={props.url} alt={props.alt} />
    </li>
)

export default Img;