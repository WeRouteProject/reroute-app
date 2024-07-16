/* eslint-disable prettier/prettier */
import { Box } from 'native-base';
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity } from 'react-native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <Box ml={2} mt={2}>
            <Text style={{ fontSize: 30 }}>Home</Text>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Icon name="menu" color="black" size={30} />
            </TouchableOpacity>
        </Box>
    );
};

export default Home;
