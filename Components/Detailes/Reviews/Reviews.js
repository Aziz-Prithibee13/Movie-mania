import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllReviews from './Types/AllReviews';
import UserReviews from './Types/UserReviews';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Reviews = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="All"
            labelStyle={{ fontSize: 20 }}
            screenOptions={{
                tabBarActiveTintColor: '#FC2947',
                tabBarStyle :{
                    height : 70 
                }
              }}
            shifting={true}>

            <Tab.Screen name="All" component={AllReviews} options={{
                headerShown:false,
                tabBarLabel: 'All Review',
                tabBarIcon: ({ color }) => (
                    
                    <MaterialCommunityIcons name="message-bulleted" color={color} size={20} />
                ),
            }} />
            <Tab.Screen name="users" component={UserReviews}
            options={{
                headerShown:false,
                tabBarLabel: "User's Review",
                tabBarIcon: ({ color }) => (
                    
                    <MaterialCommunityIcons name="message-flash" color={color} size={20} />

                ),
            }}/>

        </Tab.Navigator>
    );
};

export default Reviews;