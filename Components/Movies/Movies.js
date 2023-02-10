import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useMovies from '../../hooks/useMovies';
import Movie from '../Movie/Movie';
import Loading from '../Shared/Loading/Loading';
import Lottie from 'lottie-react-native'
import styles from './Movies.scss'

const Movies = () =>
{

    const [movies , setMovies] = useMovies();


    let loading;
    if(!movies.length)
    {
        loading  = <Loading></Loading>   
    }
    else
    {
        loading = null
    }

    let icon = <Lottie style={styles.moviesPageIcon}  source={require('../../assets/45734-cinema-news-animation.json')} autoPlay loop />




    const renderMovie = (movie)=>
    {
        return <Movie movie = {movie.item}></Movie>
    }

    return (
        <View style={styles.moviesContainer}>
            {icon}
            <Text style={styles.MovieTitle}>Our Movies</Text>

            {loading}

            <FlatList renderItem={renderMovie}  keyExtractor={(item) => item._id} data={movies}  />

           
        </View>
    );
};

export default Movies;