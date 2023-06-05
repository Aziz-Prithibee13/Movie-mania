import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

const PaginationButton = (props) =>
 {
    const {number , press } = props
    return (
        <View style={styles.pageBtn}>
            <Pressable onPress={()=>press(number)}>
                <Text>{props.children}</Text>
            </Pressable>
        </View>

    );
};

export default PaginationButton;

const styles = StyleSheet.create({
    pageBtn: {
        height: 30,
        width: 30,
        backgroundColor: '#00C4FF',
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 1,
        borderColor : '#3D3C42'
    }
})