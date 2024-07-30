/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
//import { Box, HStack } from 'native-base';
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Box, Text, Image, VStack, HStack, Button } from 'native-base';
import Logo from '../../Common/Utils/assets/images/short.png';
import HappinessChart from '../../components/HappinessChart';

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

            <Box style={styles.chartContainer}>
                {/* <Text style={styles.title}>The Happiest Countries in the World</Text> */}
                <HappinessChart />
            </Box>
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
    title: {
        alignItems: 'center',
        fontSize: 20,
        fontWeight: '700',
        paddingBottom: 5,
    }
});

export default Home;