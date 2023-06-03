import React from 'react';
import { View } from 'react-native';

const PaginationButton = (props) => {
    return (
        <Pressable>
            <Text>{props.children}</Text>
        </Pressable>
    );
};

export default PaginationButton;