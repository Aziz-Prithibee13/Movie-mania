import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { View } from 'react-native';
import auth from '../../../firebase.init';
import SocialButton from '../../../UI/CustomButtons/SocialButton';


const Google = ({type}) => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    if(error)
    {
        console.log(error);
    }


    const press = () =>
    {
        signInWithGoogle();
    }

    

    
    return (
        <View>
            <SocialButton  Press={press} img="https://i.ibb.co/zHwfZny/search.png">{type} with Google</SocialButton>
        </View>
    );
};

export default Google;