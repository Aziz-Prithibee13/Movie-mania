import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Divider = () => {
    return (
        <View style={styles.dividerOuter}>
            <View style={styles.divs}></View>
            <Text style={styles.divText}>OR</Text>
            <View style={styles.divs}></View>
        </View>
    );
};

export default Divider;


const styles = StyleSheet.create({
    dividerOuter :
    { 
        flexDirection : "row",
        alignItems : 'center',
        justifyContent : 'center'
    },
    divs :
    {
        backgroundColor : 'black',
        width : "25%",
        height : 2,
        marginHorizontal : 10
    },
    divText : 
    {
        fontSize : 20
    }
})