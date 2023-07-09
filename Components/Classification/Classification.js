import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Canvas from './Canvas/Canvas';
import Clasify from './Classify/Clasify';
import Upload from './Upload/Upload';
import Lottie from 'lottie-react-native';
import style from "./Classification.scss"
import { v4 as uuidv4 } from 'uuid'
import * as ImagePicker from 'expo-image-picker';
import * as  FileSystem from 'expo-file-system'

const Classification = () => {

    const [image, setImage] = useState(null);
    const [type, setType] = useState('')
    const [fileName, setFileName] = useState('')
    const [url , setUrl] = useState('')


    const uploadToImgbb = async () => {

        const base64 = await FileSystem.readAsStringAsync(image, {
            encoding: FileSystem.EncodingType.Base64,
        });


        try {

            const imgBBUrl = 'https://api.imgbb.com/1/upload?key=fdaec3ed0608d4178c14b5c74af92ecc'
            setUrl('')

            const imgData = new FormData();

            const uri = `data:image/jpeg;base64,${base64}`


            imgData.append('image', {
                uri,
                type: 'image/jpeg',
                name: fileName,
            });

            await fetch(imgBBUrl, {
                method: 'POST',
                body: imgData,
            }).then(res=>res.json())
            .then(data=> setUrl(data?.data?.display_url))
        }
        catch (error) {
            console.log(error);
        }



    }


    const classify = async () => {

        await uploadToImgbb();
        

        console.log(url);


        const imgbbData = {
            url : url
        }

        await fetch('https://movie-mania-server-ruby.vercel.app/classification',
        {
            method : "POST",
            headers :
            {
                "content-type" : "application/json"
            },
            body : JSON.stringify(imgbbData)
        }).then(res=>res.json()).then(data=>console.log(data)) 

    }

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [7, 10],
            quality: 1,
        });



        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setType(result.assets[0].type);
            const extension = result.assets[0].uri.split('.').pop();
            const newfileName = `${uuidv4()}.${extension}`;
            setFileName(newfileName)
        }
    };
    return (
        <ScrollView>
            <View>
                <Lottie style={style.animation} source={require('../../assets/97017-image-upload.json')} autoPlay loop></Lottie>
                <Text style={style.heading}>Classify your Movies Genre Here</Text>
                <Upload pick={pickImage}></Upload>
                <Canvas img={image}></Canvas>
                <Clasify predict={classify}></Clasify>
            </View>
        </ScrollView>
    );
};

export default Classification;