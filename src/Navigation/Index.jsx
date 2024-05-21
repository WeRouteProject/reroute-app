/* eslint-disable prettier/prettier */
//import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Pages/Login/Index';
import Signup from '../Pages/Signup/Index';
import Home from '../Pages/Home/Index';
import Form from '../Pages/Form/Index';
import Forgot from '../Pages/Forgotpw';
import VerifyCode from '../Pages/VerifyC/Index';

const Navigation = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Signup" component={Signup} />
              

                <Stack.Screen name="Form" component={Form} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="VerifyCode" component={VerifyCode} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
