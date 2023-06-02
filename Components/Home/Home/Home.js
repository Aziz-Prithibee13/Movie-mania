import React from 'react';
import { FlatList, View } from 'react-native';
import styles from "./Home.scss"

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from '../../Feeds/Feed';
import Login from '../../Authentication/Login/Login';

const Tab = createMaterialBottomTabNavigator();

const Home = (props) => {



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

            <Tab.Screen name="login" component={Login} options={{
                tabBarLabel : "",
                tabBarIcon : ({color}) => (

                    <MaterialCommunityIcons name="login" color={color} size={30}/>
                ),
            }}/>
        </Tab.Navigator>

    );
};

export default Home;