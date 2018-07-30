import React from 'react';
import Img from './Img';
import NotFound from './NotFound';

const PhotoContainer = props => {
    const results = props.imgs;
    let imgs;

    if(results.length > 0) {
        imgs = results.map(img => 
            <Img url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id} alt={img.title} />
        );
    }
    else {
        imgs = <NotFound />;
    }

    return(
        <div className="photo-container">
            <ul className="img-list">
                {imgs}
            </ul>
        </div>
    );
};

export default PhotoContainer;