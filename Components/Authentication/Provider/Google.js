import React from 'react';
import { View } from 'react-native';
import SocialButton from '../../../UI/CustomButtons/SocialButton';


const Google = ({type}) => {

    
    return (
        <View>
            <SocialButton img="https://i.ibb.co/zHwfZny/search.png">{type} with Google</SocialButton>
        </View>
    );
};

export default Google;