import React from 'react';

import { Rating } from 'react-native-elements';

const Ratings = (props) =>
 {
    const { rating , setRating} = props
    return (
        <Rating
            showRating
            startingValue={rating}
            ratingBackgroundColor='transparent'
    
        />
    );
};

export default Ratings;