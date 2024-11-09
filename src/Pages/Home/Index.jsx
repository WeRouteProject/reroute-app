/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, StyleSheet, ScrollView, Animated, View } from 'react-native';
import { Box, Image, HStack } from 'native-base';
import Logo from '../../Common/Utils/assets/images/light-logo-removebg.png';
import AppSlider from '../../Common/AppSlider';
import AppTabNav from '../../Common/AppTabNav';
import AppSolution from '../../Common/AppSolution';

const HEADER_HEIGHT = 60; // Set the height of the header

const Home = () => {
    const navigation = useNavigation();
    const scrollY = useRef(new Animated.Value(0)).current; // Animated value for scroll positio

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
            useNativeDriver: false,
            listener: (event) => {
                const offsetY = event.nativeEvent.contentOffset.y;
            },
        }
    );

    return (
        <Box safeArea flex={1} bg="white" mb={12}>
            {/* Sticky Header */}
            <View style={styles.header}>
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
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                style={{ marginTop: HEADER_HEIGHT }}
            >
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
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        zIndex: 1000, // Ensure the header is above other content
        elevation: 2, // For Android shadow effect
        shadowColor: '#000', // For iOS shadow effect
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    footer: {
        height: 60, // Adjust footer height as needed
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
