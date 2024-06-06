/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home/Index';
import About from '../Pages/About/Index';
import Login from '../Pages/Login/Index';
import Logout from '../Pages/Logout/Index';
import Forgot from '../Pages/Forgotpw';


const Tab = createBottomTabNavigator();

const BottomNav = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: '',
                // eslint-disable-next-line react/no-unstable-nested-components
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
                tabBarLabel: '',
                // eslint-disable-next-line react/no-unstable-nested-components
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
            name="Login"
            component={Login}
            options={{
                tabBarLabel: '',
                // eslint-disable-next-line react/no-unstable-nested-components
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
            name="Logout"
            component={Logout}
            options={{
                tabBarLabel: '',
                // eslint-disable-next-line react/no-unstable-nested-components
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
            name="Forgot"
            component={Forgot}
            options={{
                tabBarLabel: '',
                // eslint-disable-next-line react/no-unstable-nested-components
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
        height: 25,
        width: 25,
    },
});

