import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Result = (props) => {
    const { result } = props

    const {score} = result

    const getBackground = (genre) =>
    {
        if(genre === 'Drama')
        {
            return '#F97B22'
        }
        else if(genre === "Horror")
        {
            return '#393646'
        }
        else if(genre === 'Comedy')
        {
            return '#9575DE'
        }
    }



    const accuracy = (score*100).toFixed(2).toString()+"%"

    return (
        <View style={styles.outerView}>
            
            <Text style={styles.genreHeader}>Genre: {result.class}</Text>
            <View style={[{ backgroundColor : getBackground(result.class)},styles.innerView]}>
                <Text style={styles.genre}>Score : {accuracy} </Text>
            </View>
        </View>
    );
};

export default Result;


const styles = StyleSheet.create(
    {
        outerView : 
        {
            margin : '5%',
            padding : '5%',
            
        },
        innerView:
        {
            padding:'5%',
            borderRadius : 15,
            margin:'2%'
        },
        genreHeader :
        {
            color: '#222831', 
            fontWeight: 'bold', 
            fontSize: 20 , 
            textAlign:'center'
        },
        genre :
        {
            color: '#fff', 
            fontWeight: 'bold', 
            fontSize: 20, 
            textAlign:'center'
        }
    }
)