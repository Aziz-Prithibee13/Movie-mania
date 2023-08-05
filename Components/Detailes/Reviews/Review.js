import React from 'react';
import { Text, View } from 'react-native';

const Review = (props) => 
{

    const { reviewData } = props

    const {email , review} = reviewData
    return (
        <View>
           <Text>Email : {email}</Text> 
           <Text>review : {review}</Text> 
        </View>
    );
};

export default Review;