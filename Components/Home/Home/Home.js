import React from 'react';
import { FlatList, View } from 'react-native';
import styles from "./Home.scss"

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from '../../Feeds/Feed';
import Login from '../../Authentication/Login/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import UserDetailes from '../../UserDetailes/UserDetailes';

const Tab = createMaterialBottomTabNavigator();

const Home = (props) => {

    const [user] = useAuthState(auth);

    const UserTab =  <Tab.Screen name="UserDetailes" component={UserDetailes} options={{
        tabBarLabel : "",
        tabBarIcon : ({color}) => (

            <MaterialCommunityIcons name="account-outline" color={color} size={30}/>
        ),
    }}/>

    const loginTab = <Tab.Screen name="login" component={Login} options={{
        tabBarLabel : "",
        tabBarIcon : ({color}) => (

            <MaterialCommunityIcons name="login" color={color} size={30}/>
        ),
    }}/>

    return (

        <Tab.Navigator
            initialRouteName="feed"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: '#FFB84C' }}>
            <Tab.Screen name="feed" component={Feed} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                ),
            }} />


            { user ? UserTab : loginTab}

            
        </Tab.Navigator>

    );
};

export default Home;