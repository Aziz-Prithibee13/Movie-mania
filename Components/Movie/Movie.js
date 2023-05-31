import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import DetailesButton from '../../UI/CustomButtons/DetailesButon';
import styles from './Movie.scss'

const Movie = (props) => {

    const { movie } = props;


    const { name, rating, genre, poster } = movie;

    return (

        <View >
            <Pressable android_ripple={{ color: '#ccc' }}>
                <View style={styles.MovieContainer}>
                    <View >
                        <Image style={styles.moviePoster} source={{ uri: poster }} />
                    </View>
                    <View style={styles.moviePropertyContainer}>
                        <Text style={styles.movieProperty}> {name}</Text>
                        <Text style={styles.movieProperty}> Rating : {rating}</Text>
                        <Text style={styles.movieProperty}>Genre : {genre}</Text>
                        <DetailesButton>More Detailes</DetailesButton>
                        
                    </View>
                </View>

            </Pressable>

        </View>

    );
};

export default Movie;