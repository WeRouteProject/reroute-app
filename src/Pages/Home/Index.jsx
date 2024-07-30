/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Box, Image, HStack, Text } from 'native-base';
import Logo from '../../Common/Utils/assets/images/short.png';
import HappinessChart from '../../components/HappinessChart';

const Home = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <>
            {/* <Box ml={2} mt={2}>
                <TouchableOpacity onPress={openDrawer}>
                    <Icon name="menu" color="black" size={24} />
                </TouchableOpacity>
                <Text style={{ fontSize: 30 }}>Home</Text>
            </Box> */}

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
                    <HappinessChart />
                </Box>
            </Box>
        </>
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
    },
    chartContainer: {
        padding: 16,
    },
});

export default Home;
