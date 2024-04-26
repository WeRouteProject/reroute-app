/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Box, Text, HStack } from "native-base";
import AppInput from "../../Common/AppInput";
import AppButton from "../../Common/AppButton";
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSignup() {
        console.log('Register');
    }
    return (
        <Box
            backgroundColor={'white'}
            h={'100%'}
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            padding={30}
        >
            <Text
                fontSize={25}
                color="#4b6798"
                mb={18}
            >REGISTRATION</Text>

            <AppInput
                placeholder="Enter your Email Address"
                value={email}
                setValue={setEmail}
                icon={<Icon name="heart" size={20} color="red" />} // Pass the icon name as a prop
            />
            <AppInput
                placeholder={'Enter your Name'}
                value={name}
                setValue={setName}
                secureTextEntry={true}
            />
            <AppInput
                placeholder={'Enter your password'}
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <AppInput
                placeholder={'Confirm your password'}
                value={confirmPassword}
                setValue={setConfirmPassword}
                secureTextEntry={true}
            />

            <AppButton
                title={'Create an account'}
                onPress={handleSignup}
            />

            <HStack
                mb={4}
                alignItems={'flex-end'}
            >
                <Text >Already have an account?</Text>
                <Text underline>Login</Text>
            </HStack>
        </Box >
    );
};

export default Signup;