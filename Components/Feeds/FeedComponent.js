import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import styles from "./Feed.scss"

const FeedComponents = (props) => 
{
    const { name , img , press , route } = props
    return (
        <View style ={[styles.HomeInnerView , style.innerView]}>
            <Pressable android_ripple={{color : '#FFFBEB'}} onPress={()=>press(route)}>
            <View>
                
            <Image style={styles.image} source={{ uri : img }}/> 
                <Text style={styles.Names}>{name}</Text>
            </View>
        </Pressable>
        </View>
        
    );
};

export default FeedComponents;


const style = StyleSheet.create({
    innerView : {
        elevation : 15,
        borderRadius : 10,
        overflow : 'hidden',
        width : "40%",
        padding : 40,
        backgroundColor: "#A0C3D2"
        
    },
})