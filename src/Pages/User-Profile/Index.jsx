/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, HStack, Spinner } from 'native-base';
import { Alert } from 'react-native';
import AppHeader from '../../Common/AppHeader';
import AppInput from '../../Common/AppInput';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            console.log('Token:', token);

            if (!token) {
                throw new Error('No authentication token found');
            }

            const response = await fetch(
                'https://backend-sec-weroute.onrender.com/backend_sec/User/profile',
                {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                },
            );
            if (!response.ok) {
                throw new Error('Failed to fetch user profile');
            }

            const data = await response.json();
            console.log('User Data:', data);
            setUserData(data.data);
            setLoading(false);

        } catch (error) {
            Alert.alert('Error', error.message || 'Failed to fetch user data');
            setLoading(false);
        }
    };

    if (loading) {
        return <Box>
            <Spinner size="sm" color={Colors.gray} mt={10} mb={2} />
            <Text textAlign={'center'}>Loading...</Text>
        </Box>
    }

    return (
        <><AppHeader
            navigation={navigation}
            title="User Profile" /><AppCenterLayout>
                <Box
                    backgroundColor={Colors.white}
                    h={'100%'}
                    width={'100%'}
                    //mt={5}
                    padding={30}>
                    <Text
                        fontSize={FontSizes.xlarge}
                        color={Colors.title}
                        textAlign={'center'}>
                        INFORMATION
                    </Text>

                    {/* Progress indicator */}
                    {/* <HStack space={2} justifyContent="center" mt={5}>
                        <Box w={3} h={3} borderRadius="full" bg={Colors.primary} />
                        <Box w={3} h={3} borderRadius="full" bg={Colors.lightGray} />
                        <Box w={3} h={3} borderRadius="full" bg={Colors.lightGray} />
                        <Box w={3} h={3} borderRadius="full" bg={Colors.lightGray} />
                    </HStack> */}

                    <VStack space={4} mt={5}>
                        <Text fontSize={FontSizes.medium} color={Colors.gray}>
                            Basic Information
                        </Text>
                        <Text fontSize={FontSizes.small} color={Colors.gray}>
                            You are currently viewing your profile information.
                            If you want to update any details, please go to the Edit Profile section.
                        </Text>

                        <Text fontSize={FontSizes.medium} color={Colors.gray}>
                            Name
                        </Text>
                        <AppInput
                            value={userData?.name || ''}
                            editable={false} />

                        <Text fontSize={FontSizes.medium} color={Colors.gray}>
                            Email address
                        </Text>
                        <AppInput
                            value={userData?.email || ''}
                            editable={false} />

                        <Text fontSize={FontSizes.medium} color={Colors.gray}>
                            Phone Number
                        </Text>
                        <HStack space={2}>
                            <Box width="20%">
                                <AppInput value="+91" editable={false} />
                            </Box>
                            <Box width="80%">
                                <AppInput value={userData?.mobileNo ? userData.mobileNo.toString() : ''} editable={false} />
                            </Box>
                        </HStack>
                    </VStack>

                    <Text
                        fontSize={FontSizes.small}
                        color={Colors.gray}
                        mt={1}
                        textAlign="center">
                        Thank you for being a valued member of WeRoute! Your profile information helps us serve you better.
                    </Text>

                    {/* <AppButton title="Get OTP" onPress={handleSendCode} mt={6} /> */}
                </Box>
            </AppCenterLayout></>
    );
};

export default UserProfile;
