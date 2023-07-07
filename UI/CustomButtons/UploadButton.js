import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Style from './CustomButton.scss'

const UploadButton = (props) => {

    const { press, styles } = props
    return (
        <Pressable style={[Style.ulpoadbtn, styles]} onPress={press}>
            <View >
                <Text style={Style.btnText}>{props.children}</Text>
            </View>
        </Pressable>
    );
};

export default UploadButton;