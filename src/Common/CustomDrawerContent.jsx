/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Box, Text, Divider, HStack, Pressable, VStack, Toast, Spinner } from 'native-base';
import { Colors } from './Utils/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { showMessage } from 'react-native-flash-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawerContent = props => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { navigation } = props;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userToken = await AsyncStorage.getItem('userToken');
                const userName = await AsyncStorage.getItem('userName');
                const email = await AsyncStorage.getItem('emailId');

                if (userToken && userName && email) {
                    setToken(userToken);
                    console.log('Token fetched:', userToken);
                    console.log('Recieved userName + Email id: ' + userName + ',' + email);
                    setEmail(email);
                    setUserName(userName);
                }
            }
            catch (error) {
                console.error('Error fetching user data:', error);
                Toast.show({
                    title: 'Error',
                    status: 'error',
                    description: 'Failed to fetch user data',
                });
            }
        };
        fetchUserData();
    }, [navigation]);

    const logout = async () => {
        try {
            // Show loading state if needed
            setIsLoading(true);

            const response = await fetch('https://backend-sec-weroute.onrender.com/backend_sec/User/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                // Clear all stored data
                await AsyncStorage.multiRemove([
                    'userToken',
                    'userName',
                    'emailId',
                ]);

                showMessage({
                    message: 'Logged out successfully',
                    type: 'success',
                });

                // Navigate to login
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            } else {
                showMessage({
                    message: data.error || 'Logout failed',
                    type: 'danger',
                });
            }
        } catch (error) {
            console.error('Logout error:', error);
            showMessage({
                message: 'Network error occurred',
                type: 'danger',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <VStack flex={1}>
            <DrawerContentScrollView {...props}>
                <Box
                    ml={3}
                    mb={5}
                >
                    <Pressable onPress={() => navigation.closeDrawer()} ml={'80%'} p={2}>
                        <Icon2 name='cross' color={'white'} size={25} />
                    </Pressable>
                    <HStack alignItems={'center'} space={5}>
                        <Box>
                            <Icon name='user-circle' color="white" size={65}
                            />
                        </Box>
                        <Box>
                            <Text color={Colors.white}>{userName}</Text>
                            <Text fontSize={12} color={Colors.white} mt={1}>
                                {email}
                            </Text>
                        </Box>
                    </HStack>
                </Box>

                <Divider
                    w={250}
                    alignSelf={'center'}
                    //mt={4}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />

                <Box mt={4} ml={2}>
                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            <Icon name='home' color="white" size={20} />
                            <Text color={Colors.white} fontSize={16}>
                                Home
                            </Text>
                        </HStack>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('About')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            {/* <AppIcon isCustom name={'login'} color={colors.white} size={23} /> */}
                            <Entypo name='info-with-circle' color="white" size={18} />
                            <Text color={Colors.white} fontSize={16}>
                                About Us
                            </Text>
                        </HStack>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('edit-profile')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            <MaterialCommunityIcons name='account-edit' color="white" size={19} />
                            <Text color={Colors.white} fontSize={16}>
                                Edit Profile
                            </Text>
                        </HStack>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('happines-chart')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            {/* <AppIcon isCustom name={'login'} color={colors.white} size={23} /> */}
                            <Icon name='line-chart' color="white" size={15} />
                            <Text color={Colors.white} fontSize={16}>
                                Statistics
                            </Text>
                        </HStack>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('changePassword1')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            {/* <AppIcon isCustom name={'login'} color={colors.white} size={23} /> */}
                            <MaterialCommunityIcons name='key-alert' color="white" size={18} />
                            <Text color={Colors.white} fontSize={16}>
                                Change Password
                            </Text>
                        </HStack>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Form')}>
                        <HStack alignItems={'center'} space={5} ml={3} mt={8}>
                            {/* <AppIcon isCustom name={'login'} color={colors.white} size={23} /> */}
                            <MaterialCommunityIcons name='notebook-edit-outline' color="white" size={20} />
                            <Text color={Colors.white} fontSize={16}>
                                New Requirement
                            </Text>
                        </HStack>
                    </Pressable>
                </Box>
            </DrawerContentScrollView>
            <VStack mb={5}>
                <Divider
                    w={250}
                    alignSelf={'center'}
                    mt={12}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />

                <HStack space={5} ml={3}>
                    {/* <AppIcon isCustom name={'logout'} color={colors.white} size={25} /> */}
                    <Box mt={4}><MaterialIcon name='logout' color={Colors.light} size={20} /></Box>
                    <Pressable
                        onPress={logout}
                        disabled={isLoading}
                        opacity={isLoading ? 0.5 : 1}
                    >
                        <HStack space={2} alignItems="center">
                            <Text
                                color={Colors.white}
                                fontSize={16}
                                mt={3}
                            >
                                {isLoading ? 'Logging out...' : 'Logout'}
                            </Text>
                            {isLoading && (
                                <Spinner size="sm" color={Colors.white} mt={3} />
                            )}
                        </HStack>
                    </Pressable>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default CustomDrawerContent;
