import React from 'react';
import { StyleSheet, View } from 'react-native';
import UploadButton from '../../../UI/CustomButtons/UploadButton';

const Clasify = (props) => 
{
    const { predict } = props;
    return (
        <View>
            <UploadButton press={predict} styles={styles.classifyBtn}>Classify</UploadButton>
        </View>
    );
};

export default Clasify;

const styles = StyleSheet.create({
   classifyBtn :
   {
     backgroundColor : '#54B435'
   }
})