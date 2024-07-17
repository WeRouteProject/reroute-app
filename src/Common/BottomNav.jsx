/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home/Index';
import About from '../Pages/About/Index';
import ChangePassword from '../Pages/ChangePassword/Index';
import Form from '../Pages/Form/Index';
import Signup from '../Pages/Signup/Index';
import { Colors } from './Utils/Constants';

const Tab = createBottomTabNavigator();

const BottomNav = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: Colors.ButtonColor, // Your preferred background color
                paddingBottom: 5,
                height: 50,
                margin: 20,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderTopLeftRadius: 50,
            },
        }}>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? '#000' : Colors.dark, fontSize: 12 }}>
                        Home
                    </Text>
                ),
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={
                            focused
                                ? require('./Utils/assets/images/home.png')
                                : require('./Utils/assets/images/home1.png')
                        }
                        style={styles.imagestyle}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="About"
            component={About}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? '#000' : Colors.dark, fontSize: 12 }}>
                        About
                    </Text>
                ),
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={
                            focused
                                ? require('./Utils/assets/images/home.png')
                                : require('./Utils/assets/images/home1.png')
                        }
                        style={styles.imagestyle}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? '#000' : Colors.dark, fontSize: 12 }}>
                        CP
                    </Text>
                ),
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={
                            focused
                                ? require('./Utils/assets/images/home.png')
                                : require('./Utils/assets/images/home1.png')
                        }
                        style={styles.imagestyle}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Signup"
            component={Signup}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? '#000' : Colors.dark, fontSize: 12 }}>
                        SignUp
                    </Text>
                ),
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={
                            focused
                                ? require('./Utils/assets/images/home.png')
                                : require('./Utils/assets/images/home1.png')
                        }
                        style={styles.imagestyle}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);

export default BottomNav;

const styles = StyleSheet.create({
    imagestyle: {
        height: 18,
        width: 18,
        marginBottom: 3,
    },
});
