/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Box, Image, HStack, Text } from 'native-base';
import Logo from '../../Common/Utils/assets/images/light-logo-removebg.png';
import HappinessChart from '../../components/HappinessChart';
import { Colors } from '../../Common/Utils/Constants';

const Home = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <Box safeArea>
            <HStack alignItems="center" space={4} px={4} py={2}>
                <TouchableOpacity onPress={openDrawer}>
                    <Icon name="menu" color="black" size={28} />
                </TouchableOpacity>
                <Box flex={1} alignItems="center">
                    <Image
                        source={Logo}
                        style={styles.logo}
                        resizeMode="contain"
                        alt="WeRoute logo"
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
    logo: {
        width: '80%',
        height: 40,
    },
    chartContainer: {
        padding: 10,
        //backgroundColor: Colors.logo
    },
});

export default Home;