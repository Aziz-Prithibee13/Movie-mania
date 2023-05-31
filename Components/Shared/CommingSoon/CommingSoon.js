import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native'

const CommingSoon = () => {
    return (
        <View>
            <Lottie source={require('../../../assets/129648-coming-soon.json')} autoPlay loop />

        </View>
    );
};

export default CommingSoon;