import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '../Screens/MainScreen';
import { AboutScreen } from '../Screens/AboutScreen';
import { SettingsScreen } from '../Screens/SettingsScreen';
import { DependenciesContainer } from '../Core/DependenciesContainer';

const Tabs = createBottomTabNavigator();

interface IRootNavigator {
    deps: DependenciesContainer;
};

export const RootNavigator = ({ deps }: IRootNavigator) => {
    return (
        <Tabs.Navigator
            initialRouteName='Main'>
            <Tabs.Screen name='Main' >
                {() => <MainScreen deps={deps} />}
            </Tabs.Screen>
            <Tabs.Screen name='About me' >
                {() => <AboutScreen />}
            </Tabs.Screen>
            <Tabs.Screen name='Settings' >
                {() => <SettingsScreen />}
            </Tabs.Screen>
        </Tabs.Navigator>
    );
};
