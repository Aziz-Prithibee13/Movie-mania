import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import Review from '../Review';


const AllReviews = ({route}) => 
{
    const id = route.params.id


    


    const { data: reviews = [] } = useQuery({
        queryKey: ['allreviews'],
        queryFn: () => fetch(`https://movie-mania-server-ruby.vercel.app/review/${id}`).then(res => res.json())
    }) 

    console.log(reviews);

    
    return (
        <ScrollView>
            <Text style={styles.heading}>All Reviews</Text>
            {reviews.map(review => <Review key={review._id} reviewData={review}></Review>)}
        </ScrollView>
    );
};

export default AllReviews;


const styles = StyleSheet.create({
    heading:
    {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop : 20
    }
})