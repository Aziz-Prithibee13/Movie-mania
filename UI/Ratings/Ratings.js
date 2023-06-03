import React from 'react';

import { Rating } from 'react-native-elements';

const Ratings = (props) =>
 {
    const {value ,read} = props
    return (
        <Rating
            showRating
            readonly
            startingValue={value}
        />
    );
};

export default Ratings;