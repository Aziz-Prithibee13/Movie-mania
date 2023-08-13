import React from 'react';
import Lottie from 'lottie-react-native'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import style  from "./CustomButton.scss"
const SubmitButton = (props) => 
{
    const { press } = props
    return (
        <View style={styles.outerView}>
            <Pressable onPress={press} android_ripple={{color : '#fff'}}>
                <View style={style.submitBtninnerView}>
                    <Text style={styles.btnText}>{props.children}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    outerView :
    {
        elevation : 10,
        padding : "5%",
        backgroundColor : "#FFB84C",
        borderRadius : 15,
        margin : 30
        
    },
    btnText :
    {
        fontSize : 20,
        color : "white",
        textAlign : "center"
    

    },


})