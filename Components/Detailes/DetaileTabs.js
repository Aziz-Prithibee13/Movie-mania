import React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import General from './General/General';
import Trailer from './Trailer/Trailer';
import Reacts from './Reacts/Reacts';
import Reviews from './Reviews/Reviews';

const DetaileTabs = (props) => {


    const { route } = props
    const movieId = route.params.id
    const movieName = route.params.name
    const Tab = createBottomTabNavigator();
    return ( 
        <Tab.Navigator
            initialRouteName="general"
            activeColor="#FC2947"
            inactiveColor='#526D82'
            labelStyle={{ fontSize: 30 }}
            shifting={true}
            screenOptions={{
                tabBarActiveTintColor: '#FC2947',
                tabBarStyle :{
                    height : 100 ,
                },
              }}>
            <Tab.Screen name="general" component={General} options={{
                headerShown:false,
                tabBarLabel: 'Article',
                tabBarActiveBackgroundColor : '#FFB84C',
                tabBarIcon: ({ color , focused }) => (
                    <MaterialIcons name="article" color={color} size={40} />
                ),
            }} />
            <Tab.Screen 
            name="trailers" 
            component={Trailer}
            initialParams ={{trailerId : movieId,name: movieName}} 
            options={{
                headerShown:false,
                tabBarLabel: 'Trailer',
                tabBarActiveBackgroundColor : '#FFB84C',

                tabBarIcon: ({ color }) => (
                    
                    <MaterialCommunityIcons name="movie-roll" color={color} size={40} />

                ),
            }} />
            <Tab.Screen name="reacts" component={Reacts} options={{
                headerShown:false,
                tabBarLabel: 'Reacts',
                tabBarIcon: ({ color }) => (
                    
                    <MaterialCommunityIcons name="cards-playing-heart" color={color} size={40} />

                ),
            }} />
            <Tab.Screen name="Review" component={Reviews} options={{
                headerShown:false,
                tabBarLabel: 'Reviews',
                tabBarIcon: ({ color }) => (
                    
                    <MaterialIcons name="rate-review" color={color} size={40} />

                ),
            }} />
        </Tab.Navigator>
    );
};

export default DetaileTabs;