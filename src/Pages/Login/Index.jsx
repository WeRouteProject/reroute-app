import React, {useState} from 'react';
import AppInput from '../../Common/AppInput';
import AppButton from '../../Common/AppButton';
import {Checkbox, Box, Text, HStack} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  function handleLogin() {
    console.log('login');
    console.log('Remember Me:', rememberMe); 
  }

  return (
    <Box style={containerStyle}>
      <Text fontSize={25} color="#4b6798" mb={20}>
        LOGIN
      </Text>

      <AppInput
        placeholder="Enter your email"
        value={email}
        setValue={setEmail}
        secureTextEntry={true}
      />

      <AppInput
        placeholder="Enter your password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <HStack justifyContent="space-between" alignItems="center" mb={4}>
        <HStack space={2} alignItems="center" flex={1}>
          <Checkbox
            value="test"
            accessibilityLabel="This is a dummy checkbox"
            isChecked={rememberMe}
            onChange={isChecked => setRememberMe(isChecked)}
          />
          {rememberMe && <MaterialIcons name="check" size={20} color="green" />}
          <Text fontSize={12}>Remember me</Text>
        </HStack>
        <Text fontSize={12} underline>
          Forget password?
        </Text>
      </HStack>
      <Box mt={'60%'} w={'100%'}>
        <AppButton onPress={handleLogin} title="Login" />
      </Box>

      <HStack space={4} alignItems="center" my={4}>
        <Text fontSize={12}>Don't have an account?</Text>
        <Text fontSize={14} underline color={'#2895bc'}>
          Register Now
        </Text>
      </HStack>
    </Box>
  );
};

const containerStyle = {
  backgroundColor: 'white',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 30,
};

export default Login;
