import React from 'react';
import { View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const Trailer = () => {
    return (
        <View>
            <YoutubeIframe
                height={300}
                
                videoId={"eOrNdBpGMv8"}
            />
        </View>
    );
};

export default Trailer;