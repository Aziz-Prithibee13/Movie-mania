import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, ScrollView, StyleSheet } from 'react-native';
import useMovies from '../../hooks/useMovies';
import Movie from '../Movie/Movie';
import Loading from '../Shared/Loading/Loading';
import Lottie from 'lottie-react-native'
import styles from './Movies.scss'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Pagination from '../Shared/Pagination/Pagination';
import GsapLoading from '../Shared/Gsap/GsapLoading';
import { useNavigation } from '@react-navigation/native';

const Movies = (props) => 
{


  const [page, setPage] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [size, setSize] = useState(4)

  const [movies, setMovies] = useMovies(page, size);

  

  useEffect(() => {
    fetch(`https://movie-mania-server-ruby.vercel.app/itemsCount`)
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const pages = Math.ceil(count / 5);
        setPageCount(pages);
      })
  }, [])


  let loading;
  if (!movies.length) {
    loading = <Loading></Loading>
  }
  else {
    loading = null
  }

  let icon = <Lottie style={styles.moviesPageIcon} source={require('../../assets/45734-cinema-news-animation.json')} autoPlay loop />



  return (
    <View style={innerstyles.moviesContainer}>
      <ScrollView>
        {icon}
        <Text style={styles.MovieTitle}>Our Movies</Text>

        {loading}


        <View style={innerstyles.paginationCOntainer}>
        {
          [...Array(pageCount)]
            .map((number,index) => <Pagination key={index} number ={index}  setPage = {setPage}></Pagination>)
        }
        </View>
       

  


        <View>
          {movies.map(movie => <Movie key={movie._id}  movie={movie}></Movie>)}
        </View>




      </ScrollView>
    </View>

  );
};

export default Movies;


const innerstyles = StyleSheet.create({
  moviesContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    marginBottom : 20
  },
  paginationCOntainer: {
    flex :1,
    flexDirection: 'row',
    justifyContent : "center",
    alignItems : "center",
    marginVertical : 15
  }
})