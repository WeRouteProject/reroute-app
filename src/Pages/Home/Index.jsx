/* eslint-disable prettier/prettier */
import { Box, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Home = () => {
    return (
        <NavigationContainer independent={true}>
            <NativeBaseProvider>
                <Text>home</Text>
                {/* <AppDrawer /> */}
            </NativeBaseProvider >
        </NavigationContainer >
    );
};

export default Home;