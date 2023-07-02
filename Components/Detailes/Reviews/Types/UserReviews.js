import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SubmitButton from '../../../../UI/CustomButtons/SubmitButton';
import style from "../Reviews.scss"
const UserReviews = () => {
    return (
        <View>
            <View style={[style.formContainer, styles.formContainer]}>
                <Text style={style.formHeading}>Provide your Reviews for this movie</Text>
                <TextInput placeholder='Enter your Review' style={styles.textInput}/>
                <SubmitButton>Submit Your Review</SubmitButton>
            </View>
        </View>
    );
};

export default UserReviews;

const styles = StyleSheet.create({
    
    formContainer :
    {
        elevation : 10,
    },
    textInput :
    {
        borderWidth : 3,
        borderColor : 'black',
        margin: 20,
        padding : "10%",
        borderRadius : 10,
        height : 200,
        width : 300,
        textAlign: 'center'

    }
})