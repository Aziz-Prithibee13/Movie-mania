import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartButton from '../../../UI/CustomButtons/StartButton';
import Title from '../../../UI/Title/Title';
import styles from './Start.scss'
import Lottie from 'lottie-react-native'


const Start = (props) => {

    const { navigation } = props

    const press = () =>
    {
        
        navigation.navigate('Movies')
    }

    return (
        <View style={styles.startContainer}>
            <View >

                <View>
                    <Lottie style={styles.startAnimation} source={require('../../../assets/92678-movies.json')} autoPlay loop />

                </View>

                <View>

                    <Text style={styles.startTitle}>Welcome To Movie Mania</Text>


                    <StartButton press={press}>Let's Start</StartButton>
                </View>

            </View>
        </View>

    );
};



export default Start;