import React from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import DetailesButton from '../../UI/CustomButtons/DetailesButon';
import styles from './Movie.scss'

const Movie = (props) => {

    const { movie } = props;


    const { _id,name, rating, genre, poster} = movie;

    return (

        <View style={style.moviContainer}>
            <Pressable android_ripple={{ color: '#ccc' }}>
                <View style={styles.MovieContainer}>
                    <View >
                        <Image style={styles.moviePoster} source={{ uri: poster }} />
                    </View>
                    <View style={styles.moviePropertyContainer}>
                        <Text style={styles.movieProperty}> {name}</Text>
                        <Text style={styles.movieProperty}> Rating : {rating}</Text>
                        <Text style={styles.movieProperty}>Genre : {genre}</Text>
                        <DetailesButton  
                        id={_id} 
                        name={name}>More Detailes</DetailesButton>
                        
                    </View>
                </View>

            </Pressable>

        </View>

    );
};

export default Movie;



const style = StyleSheet.create({
    moviContainer :
    {
        elavation : 15     
    }
})