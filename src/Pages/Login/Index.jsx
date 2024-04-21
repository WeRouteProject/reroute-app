/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
//import { background } from 'native-base/lib/typescript/theme/styled-system';
import React, { useState } from 'react';
//import { View, Text } from 'react-native';
//import {Container} from 'native-base';
//import { color } from "react-native-reanimated";
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import { Checkbox, Box, Text, HStack } from 'native-base';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        console.log('login');
    }
    return (
        <Box style={containerStyle}>
            <Text
                fontSize={25}
                color="#4b6798"
                mb={20}
            >LOGIN</Text>

            <AppInput
                placeholder="Enter your email"
                value={email}
                setValue={setEmail}
                secureTextEntry={true} />

            <AppInput
                placeholder="Enter your password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true} />

            <HStack
                mb={4}>
                <Checkbox
                    value="test" accessibilityLabel="This is a dummy checkbox" />
                <Text >Remember me</Text>
                <Text underline >Forget password?</Text>
            </HStack>

            <AppButton
                onPress={handleLogin}
                title="Login"
            />
            <HStack
                mb={4}>
                <Text>Don't have an account ?</Text>
                <Text underline >Register Now</Text>
            </HStack>
        </Box>
    );
};

const containerStyle = {
    backgroundColor: 'white',
    //flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
};

const headingTitle = {
    fontSize: 32,
    color: '#4b6798',
    margin: 30,
};

const text = {
    color: 'black',
    fontSize: 12,
};

export default Login;
