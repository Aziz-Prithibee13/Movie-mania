import React from 'react';
import { Text, View } from 'react-native';
import LogoutBtn from '../../UI/CustomButtons/LogoutBtn';
import { signOut } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import { useNavigation } from '@react-navigation/native';


const UserDetailes = () => 
{

    const navigation = useNavigation()


    const signOut = async() =>
    {
        await signOut(auth);
        navigation.navigate('feed')
        
        
    }
    return (
        <View>
            <Text>User Detailes</Text>
            <LogoutBtn press={signOut}>Sign Out</LogoutBtn>
        </View>
    );
};

export default UserDetailes;