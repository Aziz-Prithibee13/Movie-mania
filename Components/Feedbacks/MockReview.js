import React from 'react';
import { View , Text, StyleSheet } from 'react-native';
import Ratings from '../../UI/Ratings/Ratings';

const MockReview = (props) => 
{
    const {review} = props;
    const { name , comment , rating } = review;
    return (
        <View style={styles.MokView}>
            <Ratings value={rating}></Ratings>
            <Text>{name}</Text>
            <Text>{comment}</Text>
        </View>
    );
};

export default MockReview;


const styles = StyleSheet.create({
    MokView : 
    {
        width : "100%",
        padding: "5%",
        elevation: 10,
        backgroundColor : "#FFFBEB",
        margin : "5%",

    }
})