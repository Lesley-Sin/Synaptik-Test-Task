import React from 'react'
import { View } from 'react-native'
import { MainScreen } from '../Screens/MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { DependenciesContainer } from '../Core/models/DependenciesContainer';

const Tabs = createBottomTabNavigator();

interface IRootNavigator {
    deps: DependenciesContainer;
};

export const RootNavigator = ({ deps }: IRootNavigator) => {
    return (
        <Tabs.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={() => <View />}
            initialRouteName='Main'>
            <Tabs.Screen name='Main' >
                {() => <MainScreen deps={deps} />}
            </Tabs.Screen>
        </Tabs.Navigator>
    );
};
