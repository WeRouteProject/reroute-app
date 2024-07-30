/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Box, Image, HStack, Text } from 'native-base';
import Logo from '../../Common/Utils/assets/images/light-logo-removebg.png';
import HappinessChart from '../../components/HappinessChart';

const Home = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <Box >
            <HStack alignItems="center" space={4}>
                <TouchableOpacity onPress={openDrawer}>
                    <Icon name="menu" color="black" size={28} />
                </TouchableOpacity>
                <Box flex={1} alignItems="center">
                    <Image
                        source={Logo}
                        style={[styles.logo, { height: height * 0.25 }]}
                        resizeMode="contain"
                        alt="image not found"
                    />
                </Box>
            </HStack>

            <Box style={styles.chartContainer}>
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
    logoContainer: {
        marginBottom: 0,
    },
    logo: {
        width: '110%',
        alignItems: 'center',
    },
    title: {
        alignItems: 'center',
        fontSize: 20,
        fontWeight: '700',
        paddingBottom: 5,
    },
    chartContainer: {
        padding: 16,
    },
});

export default Home;
