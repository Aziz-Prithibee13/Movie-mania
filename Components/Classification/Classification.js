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
import GsapLoading from '../Shared/Gsap/GsapLoading';
import { useEffect } from 'react';
import Results from './Results/Results';

const Classification = () => {

    const [image, setImage] = useState(null);
    const [type, setType] = useState('')
    const [fileName, setFileName] = useState('')
    const [url, setUrl] = useState(null)
    const [results, setResults] = useState([])
    const [btnLoad, setBtnLoad] = useState(true)
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoad(!load);
        }, 2000);
    }, []);


    const uploadToImgbb = async (img,file) => {

        try {

            const base64 = await FileSystem.readAsStringAsync(img, {
                encoding: FileSystem.EncodingType.Base64,
            });
            const imgBBUrl = 'https://api.imgbb.com/1/upload?key=fdaec3ed0608d4178c14b5c74af92ecc'



            const imgData = new FormData();

            const uri = `data:image/jpeg;base64,${base64}`


            imgData.append('image', {
                uri,
                type: 'image/jpeg',
                name: file,
            });

            let res = await fetch(imgBBUrl, {
                method: 'POST',
                body: imgData,
            })
            let data = await res.json();
            setUrl(data?.data?.display_url)
            setBtnLoad(false)
        }
        catch (error) {
            console.log(error);
        }
    }


    const classify = async () => {

        const imgbbData = {
            url: url
        }

        let res = await fetch('https://movie-mania-server-ruby.vercel.app/classification',
            {
                method: "POST",
                headers:
                {
                    "content-type": "application/json"
                },
                body: JSON.stringify(imgbbData)
            })
        let data = await res.json();
        setResults(data)

        console.log(data);

    }

    const pickImage = async () => {

        setImage(null)

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

            
            setBtnLoad(true)
            /* setUrl(null) */

            await uploadToImgbb(result.assets[0].uri , newfileName);
        }
    };
    return (
        <ScrollView>
            <View>
                <Lottie style={style.animation} source={require('../../assets/97017-image-upload.json')} autoPlay loop></Lottie>
                <Text style={style.heading}>Classify your Movies Genre Here</Text>
                <Upload pick={pickImage}></Upload>
                <Canvas img={image}></Canvas>
                {!btnLoad && <Clasify predict={classify}></Clasify>}
                {
                    results.length ? <Results prediction = {results}></Results> : <GsapLoading styles={style} loading={load} setLoad={setLoad} ></GsapLoading>
                }
                
            </View>
        </ScrollView>
    );
};

export default Classification;