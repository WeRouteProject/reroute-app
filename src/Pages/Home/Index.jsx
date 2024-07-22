/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
//import { Box, HStack } from 'native-base';
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Box, Text, Image, VStack, HStack, Button } from 'native-base';
import Logo from '../../Common/Utils/assets/images/short.png';

const Home = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();

    const openDrawer = () => {
        // Try using dispatch with DrawerActions
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (

        // <Box alignItems="center" style={styles.logoContainer}>
        //     <Image
        //         source={Logo}
        //         style={[styles.logo, { height: height * 0.25 }]}
        //         resizeMode="contain"
        //         alt="image not found"
        //     />
        // </Box>

        <Box ml={4} mt={2}>
            <HStack>
                <TouchableOpacity onPress={openDrawer}>
                    <Icon name="menu" color="black" size={28} />
                </TouchableOpacity>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.15 }]}
                    resizeMode="contain"
                    alt="image not found"
                />
            </HStack>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    // Style for the Box component containing the logo
    logoContainer: {
        marginBottom: 0, // Adjust the margin bottom to remove the white space
    },
    logo: {
        width: '100%',
        maxWidth: 200,
        maxHeight: 200,
        alignItems: 'center',
    },
});

export default Home;