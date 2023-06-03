import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import Lottie from 'lottie-react-native';
import style from "./feedback.scss";
import MockReview from './MockReview';
import MoreReviewButton from '../../UI/CustomButtons/MoreReviewButton';

const Feedback = () => {
    const reviews = [
        {
            id : 1,
            name : "Brad Givsone",
            comment : "They are very fast on delivery",
            rating : 4
            
        },
        {
            id : 2,
            name : "Janice Jackson",
            comment : "They are providing beutiful birds",
            rating : 5
            
        },
        {
            id : 3,
            name : "Alma Reynolds",
            comment : "Their Birds are so lovely",
            rating : 5
            
        }
    ]

    const renderItem = (itemdata) =>
    {
        return 
    }
    
    return (
        <ScrollView>
            <View>
                <Text style={style.header}>User feedback on our app</Text>




                <Lottie style={style.feedAnim} source={require('../../assets/99549-review-ratings.json')} autoPlay loop />


                <View style={styles.outerView}>
                    <Text style = {styles.header2}>Our Top User Reviews</Text>
                    <View style={styles.innerView}>

                    {reviews.map(review=><MockReview key={review.id} review={review}/>)}
                    </View>
                    <MoreReviewButton></MoreReviewButton>

                </View>




            </View>
        </ScrollView>

    );
};

export default Feedback;



const styles = StyleSheet.create({
    outerView :
    {
        margin : 40
    },
    header2 :
    {
        textAlign : 'center',
        fontSize : 18,
        fontWeight : 'bold',
        margin : 20
    
    },
    innerView :
    {
       justifyContent : 'center',
       alignItems : 'center'
    }
})