import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import styles from "./Home.scss"

const HomeComponents = (props) => 
{
    const { name , img } = props
    return (
        <View style ={[styles.HomeInnerView , style.innerView]}>
            <Pressable android_ripple={{color : '#FFFBEB'}}>
            <View>
                
            <Image style={styles.image} source={{ uri : img }}/> 
                <Text style={styles.Names}>{name}</Text>
            </View>
        </Pressable>
        </View>
        
    );
};

export default HomeComponents;


const style = StyleSheet.create({
    innerView : {
        elevation : 15,
        borderRadius : 10,
        overflow : 'hidden',
        width : 200,
        padding : 50,
        backgroundColor: "#A0C3D2"
        
    },
})