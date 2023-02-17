import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './CustomButton.scss'

const DetailesButton = (props) => {
    return (
        <Pressable android_ripple={{ color: '#fff' }}>
            <View style={styles.detailsBtn}>

                <View>
                    <Text style={styles.btnText}>{props.children}</Text>
                </View>

            </View>
        </Pressable>
    );
};

export default DetailesButton;