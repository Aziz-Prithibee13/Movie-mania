import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import UploadButton from '../../../UI/CustomButtons/UploadButton';

const Upload = (props) =>
{
    const { pick } = props


    return (
        <View>
            <UploadButton press={pick}>Pick Image</UploadButton>
        </View>
    );
};

export default Upload;


const styles = StyleSheet.create({
    outerView :{
        flex : 1,
        justifyContent:'center',
        alignItems : "center"
    }
})