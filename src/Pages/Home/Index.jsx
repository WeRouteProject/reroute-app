/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Box, Image, HStack, Text, VStack } from 'native-base';
import Logo from '../../Common/Utils/assets/images/light-logo-removebg.png';
import HappinessChart from '../../components/HappinessChart';
import { Colors } from '../../Common/Utils/Constants';
import AppSlider from '../../Common/AppSlider';
import AppTabNav from '../../Common/AppTabNav';
import AppSolution from '../../Common/AppSolution';

const Home = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <Box safeArea flex={1} bg="white">
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
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

                <Box justifyContent="space-evenly">
                    <Box mt={-5}>
                        <AppSlider />
                    </Box>

                    <Box flex={1} minHeight={300}>
                        <AppTabNav />
                    </Box>

                    <Box flex={1}>
                        <AppSolution />
                    </Box>

                    {/* <Box style={styles.chartContainer}>
                        <HappinessChart />
                    </Box> */}
                </Box>
            </ScrollView>
        </Box>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
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