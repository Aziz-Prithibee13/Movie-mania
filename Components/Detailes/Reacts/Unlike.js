import React from 'react';
import { View, Text, Pressable } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import style from "./Reacts.scss"

const Unlike = (props) => 
{
    const { icon , color , count } = props
    return (
        <View>
            <Pressable>
                <FontAwesome name={icon} color={color} size={50} />
            </Pressable>
            
            <Text style={style.reactLabel}>{count}</Text>
            <Text style={style.reactLabel}>Unlike</Text>

        </View>


    );
};

export default Unlike;