/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Box, NativeBaseProvider, Pressable, Text } from 'native-base';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import { Colors } from '../../Common/Utils/Constants';

const Home = () => {
    return (
        <Box>
            <Text>home</Text>
            {/* <Pressable onPress={openDrawer}>
            <Avatar icon={{
                name: 'person-outline',
                type: 'material',
                color: Colors.danger,
                size: 50,
            }} />
        </Pressable> */}
        </Box >



    );
};

export default Home;