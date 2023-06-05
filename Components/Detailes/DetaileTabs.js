import React from 'react';
import { Text, View } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import General from './General/General';
import Trailer from './Trailer/Trailer';

const DetaileTabs = () => {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="general"
            activeColor="#FC2947"
            inactiveColor='#526D82'
            labelStyle={{ fontSize: 12 }}
            shifting={true}
            barStyle={{ backgroundColor: '#FFB84C' }}>
            <Tab.Screen name="general" component={General} options={{
                tabBarLabel: 'Article',
                tabBarColor :'',
                tabBarIcon: ({ color , focused }) => (
                    <MaterialIcons name="article" color={color} size={30} />
                ),
            }} />
            <Tab.Screen name="trailers" component={Trailer} options={{
                tabBarLabel: 'Trailer',
                tabBarIcon: ({ color }) => (
                    
                    <MaterialCommunityIcons name="movie-roll" color={color} size={26} />

                ),
            }} />
            <Tab.Screen name="reacts" component={General} options={{
                tabBarLabel: 'Reacts',
                tabBarIcon: ({ color }) => (
                    
                    <MaterialCommunityIcons name="cards-playing-heart" color={color} size={26} />

                ),
            }} />
            <Tab.Screen name="Review" component={General} options={{
                tabBarLabel: 'Reviews',
                tabBarIcon: ({ color }) => (
                    
                    <MaterialIcons name="rate-review" color={color} size={26} />

                ),
            }} />
        </Tab.Navigator>
    );
};

export default DetaileTabs;