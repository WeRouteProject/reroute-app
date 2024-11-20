/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Box, Text, HStack } from 'native-base';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes, Toast } from '../../Common/Utils/Constants';
import AppFooter from '../../Common/AppFooter';
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InsideChangePass = () => {

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userToken = await AsyncStorage.getItem('userToken');
                const userName = await AsyncStorage.getItem('userName');
                const email = await AsyncStorage.getItem('emailId');

                if (userToken && userName && email) {
                    //setToken(userToken);
                    console.log('Token fetched:', userToken);
                    console.log('Recieved userName + Email id: ' + userName + ',' + email);
                    setEmail(email);
                    //setUserName(userName);
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


    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const handleSendCode = async () => {
        const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/otp-generate';
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const result = await response.json();
            console.log('Response Status:', response.status);
            console.log('Response Body:', result);
            if (response.ok) {
                showMessage({
                    message: 'Otp sent on your registered email id.',
                    type: 'success',
                });
                navigation.navigate('VerifyOtp', { email });
            } else {
                showMessage({
                    message: 'User not found with provided email id, please enter registered email id.',
                    type: 'danger',
                });
            }
        } catch (error) {
            showMessage({
                message: 'Internal server error, please check your internet connectivity and try again.',
                type: 'danger',
            });
        }
    };

    return (
        <AppCenterLayout>
            <Box
                backgroundColor={Colors.white}
                h={'100%'}
                width={'100%'}
                mt={20}
                padding={30}>
                <Text fontSize={FontSizes.xlarge} color={Colors.title} textAlign={'center'}>
                    CHANGE PASSWORD?
                </Text>
                <Box mt={10}>
                    <Text fontSize={FontSizes.medium} color={Colors.gray} my={2}>
                        Enter your registered email id
                    </Text>

                    <AppInput
                        placeholder="Enter your Email Address"
                        value={email}
                        setValue={setEmail}
                        icon={<Icon name="heart" size={20} color="red" />}
                    />
                </Box>


                <AppFooter>
                    <Box mt={70}>
                        <AppButton title={'Send Code'} onPress={handleSendCode} mt={36} />
                    </Box>
                </AppFooter>
            </Box>
        </AppCenterLayout>
    );
};

export default InsideChangePass;
