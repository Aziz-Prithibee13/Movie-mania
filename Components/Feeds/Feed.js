import React from 'react';
import { FlatList, View } from 'react-native';
import Lottie from 'lottie-react-native'

import HomeComponents from '../Home/Home/HomeComponents';
import styles from './Feed.scss'
import FeedComponents from './FeedComponent';

const Feed = (props) => 
{
    const { navigation } = props

    const pages = [
        {
            id: 1,
            name: "Movies",
            img: "https://i.ibb.co/hRfVwBF/movie-frame.png",
            route: 'Movies'
        },

        {
            id: 2,
            name: "Genre",
            img: 'https://i.ibb.co/r2MPLyh/genres.png',
            route: 'Classify'
        },

        {
            id: 3,
            name: "Users",
            img: 'https://i.ibb.co/M9Dqg25/user.png',
            route: 'Comming'
        },

        {
            id: 4,
            name: 'Feedback',
            img: 'https://i.ibb.co/bLVGYqF/feedback.png',
            route: 'feedback'
        },

    ]


    const handlePress = (route) => {
        navigation.navigate(route)
    }


    const renderItem = (itemData) => {
        return <FeedComponents name={itemData.item.name} img={itemData.item.img} press={handlePress} route={itemData.item.route} />
    }

    return (
        <View style={styles.HomeContainer}>
            <Lottie style={styles.HomeIcon} source={require('../../assets/90980-home.json')} autoPlay loop />

            <View>

                <FlatList data={pages} keyExtractor={(item) => item.id} renderItem={renderItem} numColumns={2} />
            </View>
        </View>
    );
};

export default Feed;