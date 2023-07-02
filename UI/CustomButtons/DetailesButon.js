import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './CustomButton.scss'

const DetailesButton = (props) => {
    const { id } = props


    const navigation = useNavigation();

    const handPress = () => {
        navigation.navigate("Detailes", {
            id: id
        })
    }
    return (
        <View style={styles.detailsBtn}>
            <Pressable onPress={handPress}>
                <Text style={styles.btnText}>{props.children}</Text>

            </Pressable>
        </View>

    );
};

export default DetailesButton;