import React from 'react';
import { Text, View } from 'react-native';
import LogoutBtn from '../../UI/CustomButtons/LogoutBtn';
import { signOut } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import { useNavigation } from '@react-navigation/native';


const UserDetailes = ({navigation}) => 
{


    const logOut = async() =>
    {
        await signOut(auth);
        navigation.jumpTo('feed')
        
        
    }
    return (
        <View>
            <Text>User Detailes</Text>
            <LogoutBtn press={logOut}>Sign Out</LogoutBtn>
        </View>
    );
};

export default UserDetailes;