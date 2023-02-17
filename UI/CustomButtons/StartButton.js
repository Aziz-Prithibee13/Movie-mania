import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native'
import styles from './CustomButton.scss'

const StartButton = (props) =>
 {
    const { press } = props;
    return (
        <View style={[styles.startButton, stylesheet.buttonContainer]}>
            <Pressable onPress={press}>
                <View>
                    <Text style={styles.btnText}>{props.children}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default StartButton;


const stylesheet = StyleSheet.create({
    buttonContainer :
    {
        elevation : 10
    }
})