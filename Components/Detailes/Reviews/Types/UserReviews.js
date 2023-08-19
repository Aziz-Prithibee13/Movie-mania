import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import SubmitButton from '../../../../UI/CustomButtons/SubmitButton';
import Lottie from 'lottie-react-native'
import style from "../Reviews.scss"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useQuery } from 'react-query';
import Review from '../Review';
import axios from 'axios';
const UserReviews = (props) => {
    //const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState('');
    const [user] = useAuthState(auth)

    const [ack, setAck] = useState({})


    const { route } = props;




    const id = route.params.id

   



        const { data:reviews = [], isLoading, refetch } = useQuery({
            queryKey : ["userReviews"],
            queryFn : () => fetch(`https://movie-mania-server-ruby.vercel.app/review/${user.email}/${id}`).then(res=>res.json()),
            refetchOnMount : 'always'
        })

        console.log(reviews);

    


    const handleBlur = (e) => {
        setReview(e.nativeEvent.text)
    }

    const handleSubmit = async () => {
        
        const userReview =
        {
            email: user.email,
            movieId: id,
            review: review
        }

        await fetch('https://movie-mania-server-ruby.vercel.app/review', {
            method: "POST",
            headers:
            {
                "content-type": "application/json"
            },
            body: JSON.stringify(userReview)
        }).then(res => res.json()).then(data => setAck(data))

        if(ack)
        {
            refetch()
        }


    }









    return (
        <ScrollView>
            <View style={style.formContainer}>
                <View style={styles.formView}>

                    <Text style={style.formHeading}>Provide your Reviews for this movie</Text>
                    <TextInput
                        placeholder='Enter your Review'
                        style={styles.textInput}
                        onEndEditing={handleBlur}
                    />
                    <SubmitButton press={handleSubmit}>Submit Your Review</SubmitButton>
                </View>

            </View>


            <View>
                <Text style={styles.heading}>Your Reviews</Text>

                {
                    isLoading ? <Text>Loading ....</Text> : reviews.map(review => <Review key={review._id} reviewData={review}></Review>)
                }
            </View>
        </ScrollView>
    );
};

export default UserReviews;

const styles = StyleSheet.create({

    formView:
    {
        elevation: 10,
    },
    textInput:
    {
        borderWidth: 3,
        borderColor: 'black',
        margin: 20,
        padding: "10%",
        borderRadius: 10,
        height: 200,
        width: 300,
        textAlign: 'center'

    },
    heading:
    {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    }

})