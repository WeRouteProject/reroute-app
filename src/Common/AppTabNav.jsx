/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Box } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../Pages/Home/Index';
import Form from '../Pages/Form/Index';
import Signup from '../Pages/Signup/Index';
import Login from '../Pages/Login/Index';

// Example screen components (these would be replaced by actual imports in your code)

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const AppTabNav = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
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
                    colors={['#182B3A', '#1E3B70']} // Gradient background
                    style={{ flex: 1, borderRadius: 30 }}
                />
            ),
        }}>
        {/* Adding Screens with text labels */}
        <Tab.Screen
            name="Form"
            component={Form}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Text
                            style={[
                                styles.textStyle,
                                { color: focused ? '#87CEFA' : 'white' },
                            ]}>
                            Form
                        </Text>
                    </Box>
                ),
            }}
        />
        <Tab.Screen
            name="Login"
            component={Login}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Text
                            style={[
                                styles.textStyle,
                                { color: focused ? '#87CEFA' : 'white' },
                            ]}>
                            Login
                        </Text>
                    </Box>
                ),
            }}
        />
        <Tab.Screen
            name="Signup"
            component={Signup}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Box style={styles.iconContainer}>
                        <Text
                            style={[
                                styles.textStyle,
                                { color: focused ? '#87CEFA' : 'white' },
                            ]}>
                            Signup
                        </Text>
                    </Box>
                ),
            }}
        />
    </Tab.Navigator>
);

export default AppTabNav;

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
