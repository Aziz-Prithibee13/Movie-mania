import React from 'react';
import { FlatList, View } from 'react-native';
import movies from "../../../assets/movie-frame.png"
import genre from "../../../assets/genres.png"
import users from '../../../assets/user.png'
import feedback from '../../../assets/feedback.png'
import HomeComponents from './HomeComponents';
import styles from "./Home.scss"
import Lottie from 'lottie-react-native'

const Home = () => {

    const pages = [
        {
            id: 1,
            name: "Movies",
            img: "https://i.ibb.co/hRfVwBF/movie-frame.png",
            route: ""
        },

        {
            id: 2,
            name: "Genre",
            img: 'https://i.ibb.co/r2MPLyh/genres.png',
            route: ""
        },

        {
            id: 3,
            name: "Users",
            img: 'https://i.ibb.co/M9Dqg25/user.png',
            route: ""
        },

        {
            id: 4,
            name: "Feedback",
            img: 'https://i.ibb.co/bLVGYqF/feedback.png',
        },

    ]


    const renderItem = (itemData) => {
        return <HomeComponents name={itemData.item.name} img={itemData.item.img} />
    }


    return (

        <View style={styles.HomeContainer}>
            
                <Lottie style={styles.HomeIcon} source={require('../../../assets/90980-home.json')} autoPlay loop />
            
            <View>

                <FlatList data={pages} keyExtractor={(item) => item.id} renderItem={renderItem} numColumns={2} />
            </View>


        </View>

    );
};

export default Home;