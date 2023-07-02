import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import style from "./Reacts.scss"

const Like = (props) => 
{

    const {press , color, icon} = props



    return (
        <View>
            <Pressable onPress={press} android_ripple={{color : '#eee'}}>
                <FontAwesome name={icon} color={color} size={50} />
            </Pressable>
            <Text style={style.reactLabel}>Like</Text>

        </View>
    );
};

export default Like;