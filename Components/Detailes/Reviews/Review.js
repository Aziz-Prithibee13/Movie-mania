import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Review = (props) => {

    const { reviewData } = props

    const { email, review } = reviewData
    return (
        <View style={styles.reviewView}>
            <Text>Email : {email}</Text>
            <Text>review : {review}</Text>
        </View>
    );
};

export default Review;


const styles = StyleSheet.create({
    reviewView:
    {
        padding: "5%",
        elevation: 10,
        backgroundColor: "#FFFBEB",
        margin: 30,
        borderRadius : 15

    }
})