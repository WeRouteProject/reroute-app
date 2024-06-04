/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home/Index';
import About from '../Pages/About/Index';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    );
};

export default BottomNav;
