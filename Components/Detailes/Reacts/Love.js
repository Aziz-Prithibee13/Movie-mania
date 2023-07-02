import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import style from "./Reacts.scss";


const Love = (props) => {
    const { press, color , icon } = props;
    return (
        <View>
            <Pressable onPress={press}>

                <View>
                    <MaterialIcons name={icon} color={color} size={50} />
                </View>
            </Pressable>
            <Text style={style.reactLabel}>Love</Text>

        </View>
    );
    
};

export default Love;

