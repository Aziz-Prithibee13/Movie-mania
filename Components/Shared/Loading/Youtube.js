import React from 'react';

import Lottie from 'lottie-react-native'
import styles from './Loading.scss'

const Youtube = () => {
    return (
        
        <Lottie style={styles.loading} source={require('../../../assets/animation_lk2dd26t.json')} autoPlay loop />
    );
};

export default Youtube;