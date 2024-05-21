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

const VerifyCode = () => {

    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    // const navigation = useNavigation();

    function handleSignup() {
        console.log('Register');
        //navigation.navigate('Login');
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
                    VERIFY CODE
                </Text>
                <Box mt={10}>
                    <Text fontSize={FontSizes.medium} color={Colors.dark} my={2} mb={8}>
                        Enter the verfication code we just sent you on your email address
                    </Text>

                    <AppInput
                        placeholder="Enter your verification code"
                        value={email}
                        setValue={setEmail}
                        icon={<Icon name="heart" size={20} color="red" />}
                    />
                </Box>

                <HStack mb={5} justifyContent={'flex-start'} ml={2}>
                    <Text color={Colors.dark} mr={2} fontSize={FontSizes.small}>Didn't receive a code? </Text>
                    <Text underline color={Colors.primary} fontSize={FontSizes.small} onPress={handleSignup}>Resend</Text>
                </HStack>

                <AppFooter>
                    <Box mt={70}>
                        <AppButton title={'Verify'} onPress={handleSignup} mt={36} />
                    </Box>
                </AppFooter>
            </Box>
        </AppCenterLayout>
    );
};
export default VerifyCode;        