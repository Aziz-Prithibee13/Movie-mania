import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const MoreReviewButton = () => {
    return (
        <View style={styles.btnView}>
            <Pressable>
                <Text style={styles.btnText}>More Reviews</Text>
            </Pressable>
        </View>
    );
};

export default MoreReviewButton;

const styles = StyleSheet.create({
    btnView :
    {
        elevation : 10,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
        margin : 20,
        backgroundColor : '#3B3486',
        padding : "2%",
        
    },
    btnText : 
    {
        fontSize : 15,
        color :'white'
    }
})