import React from 'react';
import { Pressable, Text, View } from 'react-native';

const UploadButton = (props) => 
{

    const { press} = props
    return (
        <Pressable onPress={() =>press() }>
            <View >

                <View>
                    <Text>Upload</Text>
                </View>

            </View>
        </Pressable>
    );
};

export default UploadButton;