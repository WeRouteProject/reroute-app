/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Box } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import Home from '../Home/Index'; // Your existing Home component
import Form from '../Pages/Form/Index';
import UserProfile from '../Pages/User-Profile/Index';
import AppSolution from '../Common/AppSolution';

const Tab = createBottomTabNavigator();

const HomeScreenWithBottomNav = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarShowLabel: false,
            tabBarBackground: () => (
                <LinearGradient
                    colors={['#182B3A', '#1E3B70']}
                    style={styles.tabBarBackground}
                />
            ),
        }}
    >
        <Tab.Screen
            name="HomeTab"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Icon name="home" size={22} color={focused ? '#87CEFA' : 'white'} />
                    </Box>
                ),
            }}
        />
        <Tab.Screen
            name="Form"
            component={Form}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Icon name="form-select" size={22} color={focused ? '#87CEFA' : 'white'} />
                    </Box>
                ),
            }}
        />
        <Tab.Screen
            name="Solution"
            component={AppSolution}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Icon name="lightbulb-on" size={22} color={focused ? '#87CEFA' : 'white'} />
                    </Box>
                ),
            }}
        />
        <Tab.Screen
            name="UserProfile"
            component={UserProfile}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Icon name="account" size={22} color={focused ? '#87CEFA' : 'white'} />
                    </Box>
                ),
            }}
        />
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    tabBar: {
        height: 50,
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 10,
        borderRadius: 30,
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 0,
    },
    tabBarBackground: {
        flex: 1,
        borderRadius: 30,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default HomeScreenWithBottomNav;