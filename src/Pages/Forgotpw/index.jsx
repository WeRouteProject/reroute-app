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

const Forgot = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    function handleSignup() {
        console.log('Register');
        navigation.navigate('VerifyCode');
    }

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
                        <AppButton title={'Send Code'} onPress={handleSignup} mt={36} />
                    </Box>
                </AppFooter>
            </Box>
        </AppCenterLayout>
    );
};

export default Forgot;