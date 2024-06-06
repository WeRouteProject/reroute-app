/* eslint-disable prettier/prettier */
import { Box, Pressable } from 'native-base';
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';  // Import useNavigation
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-svg';

const Home = () => {
    const navigation = useNavigation();  // Use the useNavigation hook

    const openDrawer = () => {
        navigation.openDrawer();
        // navigation.dispatch(DrawerActions.openDrawer());  // Correctly call the openDrawer method
    };

    return (
        <Box ml={2} mt={2}>
            <Text fontSize={30}> Home </Text>
            <Pressable onPress={openDrawer}>
                {/* <Avatar icon={{
                    name: 'person-outline',
                    type: 'material',
                    color: Colors.danger,
                    size: 50,
                }} /> */}
                <Icon name="menu" color="black" size={30} />
            </Pressable>
        </Box >
    );
};

export default Home;
