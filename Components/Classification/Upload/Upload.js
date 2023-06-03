import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadButton from '../../../UI/CustomButtons/UploadButton';

const Upload = () => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <View style ={styles.outerView}>
            <Text>Heello</Text>
            <UploadButton Press={pickImage}></UploadButton>
        
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

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