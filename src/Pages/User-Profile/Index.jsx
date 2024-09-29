/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, HStack } from 'native-base';
import { Alert } from 'react-native';
import AppHeader from '../../Common/AppHeader';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
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
            // Replace this with your actual API call
            const token = await AsyncStorage.getItem('userToken');
            console.log('Token:', token);

            if (!token) {
                throw new Error('No authentication token found');
            }

            const response = await fetch(
                'https://backend-sec-weroute.onrender.com/backend_sec/User/user-profile',
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
            setUserData(data.response);
            setLoading(false);

        } catch (error) {
            Alert.alert('Error', error.message || 'Failed to fetch user data');
            setLoading(false);
        }
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    const handleSendCode = async () => {
        const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/otp-generate';
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userData.email }),
            });
            const result = await response.json();
            console.log('Response Status:', response.status);
            console.log('Response Body:', result);
            if (response.ok) {
                // console.log('ok');
                navigation.navigate('VerifyOtp', { email: userData.email });
                Alert.alert('Otp sent on registered mail id');
            } else {
                console.log('not-ok');
                Alert.alert('User not found with provided email id', result?.message || 'Invalid Credientials');
            }
        } catch (error) {
            Alert.alert('Error');
        }
    };


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
                    <HStack space={2} justifyContent="center" mt={5}>
                        <Box w={3} h={3} borderRadius="full" bg={Colors.primary} />
                        <Box w={3} h={3} borderRadius="full" bg={Colors.lightGray} />
                        <Box w={3} h={3} borderRadius="full" bg={Colors.lightGray} />
                        <Box w={3} h={3} borderRadius="full" bg={Colors.lightGray} />
                    </HStack>

                    <VStack space={4} mt={5}>
                        <Text fontSize={FontSizes.medium} color={Colors.gray}>
                            Basic Information
                        </Text>
                        <Text fontSize={FontSizes.small} color={Colors.gray}>
                            Kindly add your data, it will help nurses to better remember you.
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
                                <AppInput value={userData?.mobileNo ? userData.mobileNo.toString() : ''} editable={false} /> {/* Ensure correct casing */}
                            </Box>
                        </HStack>
                    </VStack>

                    <Text
                        fontSize={FontSizes.small}
                        color={Colors.gray}
                        mt={2}
                        textAlign="center">
                        We will send you a one-time password to this mobile number
                    </Text>

                    <AppButton title="Get OTP" onPress={handleSendCode} mt={6} />
                </Box>
            </AppCenterLayout></>
    );
};

export default UserProfile;
