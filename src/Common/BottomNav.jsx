/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home/Index';
import About from '../Pages/About/Index';
import ChangePassword from '../Pages/ChangePassword/Index';
import Form from '../Pages/Form/Index';
import Signup from '../Pages/Signup/Index';
import { Colors } from './Utils/Constants';
import { Box } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import UserProfile from '../Pages/User-Profile/Index';


const Tab = createBottomTabNavigator();

const BottomNav = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                //backgroundColor: '#3262a8',
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
            tabBarShowLabel: false,
            tabBarBackground: () => (
                <LinearGradient
                    //colors={['#1E3B70', '#29539B']}
                    colors={['#182B3A', '#1E3B70']} // Define your gradient colors here
                    style={{ flex: 1, borderRadius: 30 }}
                />
            ),
        }}>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Image
                            source={require('./Utils/assets/images/home.png')}
                            style={[styles.imagestyle, { tintColor: focused ? '#87CEFA' : 'white' }]}
                        />
                    </Box>
                ),
            }}
        />
        <Tab.Screen
            name="About"
            component={About}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Image
                            source={require('./Utils/assets/images/home.png')}
                            style={[styles.imagestyle, { tintColor: focused ? '#87CEFA' : 'white' }]}
                        />
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
                        <Image
                            source={require('./Utils/assets/images/home.png')}
                            style={[styles.imagestyle, { tintColor: focused ? '#87CEFA' : 'white' }]}
                        />
                    </Box>
                ),
            }}
        />
        <Tab.Screen
            name="user-profile"
            component={UserProfile}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Image
                            source={require('./Utils/assets/images/accontInfo.png')}
                            style={[styles.imagestyle, { tintColor: focused ? '#87CEFA' : 'white' }]}
                        />
                    </Box>
                ),
            }}
        />
    </Tab.Navigator>
);

export default BottomNav;

const styles = StyleSheet.create({
    imagestyle: {
        height: 22,
        width: 22,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});