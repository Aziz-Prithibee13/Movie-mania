import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
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
                    <View>
                        <Text>Name : {name}</Text>
                        <Text>Rating : {rating}</Text>
                        <Text>Genre : {genre}</Text>
                        
                    </View>
                </View>

            </Pressable>

        </View>

    );
};

export default Movie;