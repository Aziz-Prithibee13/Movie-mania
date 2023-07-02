import React from 'react';
import { View, Text, Pressable } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import style from "./Reacts.scss"

const Unlike = () => {
    return (
        <View>
            <Pressable>
                <FontAwesome name='thumbs-o-down' size={50} />
            </Pressable>
            
            <Text style={style.reactLabel}>Unlike</Text>

        </View>


    );
};

export default Unlike;