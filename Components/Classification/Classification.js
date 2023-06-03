import React from 'react';
import { Text, View } from 'react-native';
import Upload from './Upload/Upload';

const Classification = () => {
    return (
        <View>
            <Text>Classify your Movies Genre Here</Text>

            <Upload></Upload>
        </View>
    );
};

export default Classification;