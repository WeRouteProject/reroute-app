/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Box, Text, HStack } from 'native-base';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AppFooter from '../../Common/AppFooter';
import { showMessage } from 'react-native-flash-message';

const Forgot = () => {

    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    function handleSignup() {
        console.log('Register');
        navigation.navigate('Login');
    }

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
                    FORGOT PASSWORD?
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

                <HStack mb={5} justifyContent={'flex-end'} mr={2}>
                    <Text underline color={Colors.primary} fontSize={FontSizes.small} onPress={handleSignup}> Back to Login</Text>
                </HStack>

                <AppFooter>
                    <Box mt={70}>
                        <AppButton title={'Send Code'} onPress={handleSendCode} mt={36} />
                    </Box>
                </AppFooter>
            </Box>
        </AppCenterLayout>
    );
};

export default Forgot;
