/* eslint-disable prettier/prettier */
import { Box, NativeBaseProvider, Pressable, Text } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation
import { Avatar } from 'react-native-elements';
import { Colors } from '../../Common/Utils/Constants';

const Home = () => {
    const navigation = useNavigation();  // Use the useNavigation hook

    const openDrawer = () => {
        navigation.openDrawer();  // Correctly call the openDrawer method
    };

    return (
        <Box>
            <Text>home</Text>
            <Pressable onPress={openDrawer}>
                <Avatar icon={{
                    name: 'person-outline',
                    type: 'material',
                    color: Colors.danger,
                    size: 50,
                }} />
            </Pressable>
        </Box>
    );
};

export default Home;
