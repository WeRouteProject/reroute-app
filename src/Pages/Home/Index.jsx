/* eslint-disable prettier/prettier */
import { Box, NativeBaseProvider, Pressable, Text } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation
import { Avatar } from 'react-native-elements';
import { Colors } from '../../Common/Utils/Constants';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNav from '../../Common/BottomNav';

const Home = () => {
    const navigation = useNavigation();  // Use the useNavigation hook

    const openDrawer = () => {
        navigation.openDrawer();  // Correctly call the openDrawer method
    };

    return (
        <Box ml={2} mt={2}>
            <Pressable onPress={openDrawer}>
                {/* <Avatar icon={{
                    name: 'person-outline',
                    type: 'material',
                    color: Colors.danger,
                    size: 50,
                }} /> */}
                <Icon name="menu" color="black" size={30} />
            </Pressable>

        </Box>
    );
};

export default Home;
