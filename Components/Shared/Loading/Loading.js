import React from 'react';
import Lottie from 'lottie-react-native'
import styles from './Loading.scss'

const Loading = () => {
    return (
            <Lottie style={styles.loading} source={require('../../../assets/98432-loading.json')} autoPlay loop />
        
    );
};

export default Loading;