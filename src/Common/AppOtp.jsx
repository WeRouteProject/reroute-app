import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Box, HStack } from 'native-base';
import AppButton from './AppButton';

const VerifyCode = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  const handleVerify = () => {
    // Implement verification logic here
    console.log('Verifying code:', code.join(''));
  };

  const handleResend = () => {
    // Implement resend logic here
    console.log('Resending code');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VERIFY code</Text>
      <Text style={styles.subtitle}>
        Enter the verification code we just sent you on your email address
      </Text>
      <HStack space={2} justifyContent="center" mt={5}>
        {code.map((_digit: string, index: number) => (
          <Box
            key={index}
            w={10}
            h={12}
            borderWidth={1}
            borderColor="gray.300"
            borderRadius="md"
            alignItems="center"
            justifyContent="center">
            <Text style={styles.codeText}>{digit}</Text>
          </Box>
        ))}
      </HStack>
      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>
          Did not receive a code? <Text style={styles.resendLink}>Resend.</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <AppButton title="Verify" onPress={handleVerify} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3366CC',
    marginTop: 40,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  codeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resendText: {
    marginTop: 20,
    color: '#666',
  },
  resendLink: {
    color: '#40E0D0',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
});

export default VerifyCode;
