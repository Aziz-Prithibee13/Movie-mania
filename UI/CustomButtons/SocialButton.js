import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import style from './CustomButton.scss'
const SocialButton = (props) => {
    const { img } = props
    return (
        <View style={[styles.outerView]}>
            <Pressable >
                <View style={styles.innerView}>
                    <Image style={styles.btnImg} source={{ uri: img }} />
                    <Text style={styles.btnText}>{props.children}</Text>
                </View>

            </Pressable>
        </View>
    );
};

export default SocialButton;

const styles = StyleSheet.create({
    outerView:
    {
        elevation: 10,
        padding: '3%',
        backgroundColor: "#3C486B",
        borderRadius: 15,
        margin: 30,

    },
    btnText:
    {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        

    },

    btnImg:
    {
        width: "15%",
        height: 60,
        marginHorizontal: 'auto'

    },

    innerView :
    {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        
    }



})