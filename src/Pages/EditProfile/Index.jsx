/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, HStack, Spinner } from 'native-base';
import { Alert } from 'react-native';
import AppHeader from '../../Common/AppHeader';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

const EditProfile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        mobileNo: ''
    });
    const [loading, setLoading] = useState(true);
    const [originalData, setOriginalData] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            console.log('[Profile] Fetching user data with token:', token);

            if (!token) {
                showMessage({
                    message: 'Something went wrong, please login again.',
                    type: 'danger',
                });
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
                console.error('[Profile] Error Response is not ok');
                showMessage({
                    message: 'Something went wrong, please try again later.',
                    type: 'danger',
                });
            }

            const data = await response.json();
            console.log('[Profile] Fetched user data:', data);
            setUserData(data.data);
            setOriginalData(data.data);
            setLoading(false);

        } catch (error) {
            console.error('[Profile] Error fetching user data:', error);
            showMessage({
                message: 'Something went wrong, please try again later.',
                type: 'danger',
            });
            setLoading(false);
        }
    };

    const handleUpdateField = (field, value) => {
        setUserData(prev => ({
            ...prev,
            [field]: value
        }));
        console.log(`[Profile] Updated ${field} field:`, value);
    };

    const hasChanges = () => {
        return JSON.stringify(userData) !== JSON.stringify(originalData);
    };

    const handleUpdateProfile = async () => {
        if (!hasChanges()) {
            Alert.alert('No Changes', 'No changes were made to update.');
            return;
        }

        try {
            setLoading(true);
            const token = await AsyncStorage.getItem('userToken');
            console.log('[Profile] Updating profile with data:', userData);

            const response = await fetch(
                'https://backend-sec-weroute.onrender.com/backend_sec/User/profile',
                {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: userData.name,
                        email: userData.email,
                        mobileNo: userData.mobileNo,
                    }),
                }
            );

            const result = await response.json();
            console.log('[Profile] Update response:', result);

            if (response.ok && result.success) {
                console.log('Success', 'Profile updated successfully');
                showMessage({
                    message: 'Congratulations, Profile updated successfully',
                    type: 'success',
                });
                setOriginalData(userData);
                await fetchUserData();
            } else {
                Alert.alert('Error', result.error || 'Failed to update profile');
            }
        } catch (error) {
            console.error('[Profile] Error updating profile:', error);
            Alert.alert('Error', 'Failed to update profile. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Box flex={1} justifyContent="center" alignItems="center">
                <Spinner size="lg" color={Colors.gray} />
                <Text mt={2}>Loading...</Text>
            </Box>
        );
    }

    return (
        <>
            <AppHeader
                navigation={navigation}
                title="Account Information" />
            <AppCenterLayout>
                <Box
                    backgroundColor={Colors.white}
                    h={'100%'}
                    width={'100%'}
                    padding={30}>
                    <Text
                        fontSize={FontSizes.xlarge}
                        color={Colors.title}
                        textAlign={'center'}
                        mb={5}>
                        EDIT PROFILE
                    </Text>

                    <VStack space={4}>
                        <Text fontSize={FontSizes.small} color={Colors.gray}>
                            Please ensure all your personal information is accurate and up to date. Any changes will be reflected across your account once saved.
                        </Text>

                        <Text fontSize={FontSizes.medium} color={Colors.gray}>
                            Name
                        </Text>
                        <AppInput
                            value={userData?.name || ''}
                            setValue={(value) => handleUpdateField('name', value)}
                            placeholder="Enter your name"
                            editable={true} />

                        <Text fontSize={FontSizes.medium} color={Colors.gray}>
                            Email address
                        </Text>
                        <AppInput
                            value={userData?.email || ''}
                            setValue={(value) => handleUpdateField('email', value)}
                            placeholder="Enter your email"
                            editable={true} />

                        <Text fontSize={FontSizes.medium} color={Colors.gray}>
                            Phone Number
                        </Text>
                        <HStack space={2}>
                            <Box width="20%">
                                <AppInput
                                    value="+91"
                                    setValue={() => { }}
                                    editable={false} />
                            </Box>
                            <Box width="80%">
                                <AppInput
                                    value={userData?.mobileNo ? userData.mobileNo.toString() : ''}
                                    setValue={(value) => handleUpdateField('mobileNo', value)}
                                    placeholder="Enter mobile number"
                                    editable={true} />
                            </Box>
                        </HStack>
                    </VStack>

                    <VStack space={4} mt={6}>
                        <AppButton
                            title="Update Profile"
                            onPress={handleUpdateProfile}
                            disabled={!hasChanges() || loading}
                        />
                    </VStack>
                </Box>
            </AppCenterLayout>
        </>
    );
};

export default EditProfile;
