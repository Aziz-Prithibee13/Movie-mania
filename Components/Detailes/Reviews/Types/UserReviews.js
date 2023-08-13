import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import SubmitButton from '../../../../UI/CustomButtons/SubmitButton';
import Lottie from 'lottie-react-native'
import style from "../Reviews.scss"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useQuery } from 'react-query';
import Review from '../Review';
const UserReviews = (props) => {
    const [values, setValues] = useState('');
    const [review, setReview] = useState('');
    const [user] = useAuthState(auth)

    const {route} = props;
    const id = route.params.id




    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => fetch(`https://movie-mania-server-ruby.vercel.app/review?email=${user.email}`).then(res => res.json())
    })


  
    const handleBlur = (e) => {
        setReview(e.nativeEvent.text)
    }

    const handleSubmit = () => {
        const userReview =
        {
            email: user.email,
            movieId : id,
            review: review
        }

        fetch('https://movie-mania-server-ruby.vercel.app/review', {
            method: "POST",
            headers:
            {
                "content-type": "application/json"
            },
            body: JSON.stringify(userReview)
        }).then(data => data.json()).then(data => console.log(data))
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
                
                { reviews.map(review=><Review key={review._id} reviewData={review}></Review>)}
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
    heading : 
    {
        fontWeight : 'bold',
        fontSize : 30,
        textAlign : 'center'
    }

})