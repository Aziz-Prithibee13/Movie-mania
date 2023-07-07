import React from 'react';
import { Pressable, TextInput, View } from 'react-native';

const DateBtn = (props) => 
{
    const { press, styles, value } = props
    return (
        <Pressable onPress={press}>
            <TextInput  style={styles} editable={false} value={value} placeholder='Enter your Birth date'/>
        </Pressable>
    );
};

export default DateBtn;