import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '../Screens/MainScreen';
import { AboutScreen } from '../Screens/AboutScreen';

const Tabs = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tabs.Navigator screenOptions={{
            header: 
        }}
            initialRouteName='Main'>
            <Tabs.Screen name='Main' >
                {() => <MainScreen />}
            </Tabs.Screen>
            <Tabs.Screen name='About me' >
                {() => <AboutScreen />}
            </Tabs.Screen>
        </Tabs.Navigator>
    )
};