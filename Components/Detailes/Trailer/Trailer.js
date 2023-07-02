import React from 'react';
import { Text, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import style from './Traile.scss'
const Trailer = () => {
    return (
        <View style={style.trailerContainer}>
            <Text>You can See </Text>
            <YoutubeIframe
                height={300}
                
                videoId={"eOrNdBpGMv8"}
            />
        </View>
    );
};

export default Trailer;