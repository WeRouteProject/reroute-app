/* eslint-disable prettier/prettier */
// import { View, Text } from 'react-native'
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppHomeContent from '../Pages/Home/AppHomeContent';
import About from '../Pages/About/Index';

const Drawer = createDrawerNavigator();

const AppDrawerNav = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={AppHomeContent} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppDrawerNav;
