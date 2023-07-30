import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SubmitButton from '../../../../UI/CustomButtons/SubmitButton';
import Lottie from 'lottie-react-native'
import style from "../Reviews.scss"
const UserReviews = () => 
{
    const [values ,setValues] = useState('');
    const [review , setReview] = useState('');

    const handleBlur = (e) =>
    {
        setReview(e.nativeEvent.text)
    }

    const handleSubmit = () =>
    {
        
    }

    return (
        <View>
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
                <View></View>
            </View>
        </View>
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

    }
})