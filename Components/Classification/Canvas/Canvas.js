import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import style from '../Classification.scss'

const Canvas = (props) => 
{
    const { img } = props;

    const defaultImg = <Image style={style.defaultimg} source={{ uri : 'https://i.ibb.co/48tMTkm/upload-2.png' }}/>
    const pickedImg = <Image style={style.pickedImg} source={{ uri : img}}/>
    return (
        <View >
            {img ? pickedImg : defaultImg}
        </View>
    );
};

export default Canvas;

