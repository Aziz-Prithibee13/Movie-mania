import React from 'react';
import { Pressable, Text, View } from 'react-native';

import style from './CustomButton.scss'

const LogoutBtn = (props) => {

    const {press , navigation} = props
    return (
        <Pressable style={style.logOutBtn} onPress={press}>
            <Text style={style.btnText}>{props.children}</Text>
        </Pressable>
    );
};

export default LogoutBtn;