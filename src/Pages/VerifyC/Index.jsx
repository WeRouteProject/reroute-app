/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Box, HStack } from 'native-base';
import AppButton from '../../Common/AppButton';
import AppHeader from '../../Common/AppHeader';
import { Colors } from '../../Common/Utils/Constants';
import { useNavigation } from '@react-navigation/native';

const VerifyCode = ({ navigation }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const nav = useNavigation();

    const handleCodeChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };

    const handleVerify = () => {
        // Implement verification logic here
        console.log('Verifying code:', code.join(''));
        nav.navigate('change-password');
    };

    const handleResend = () => {
        // Implement resend logic here
        console.log('Resending code');
    };

    return (
        <View style={styles.container}>
            <AppHeader
                navigation={navigation}
                title="VERIFY OTP"
            />
            {/* <Text style={styles.title}>VERIFY Code</Text> */}
            <Box style={styles.sub_container}>
                <Text style={styles.subtitle}>
                    Enter the verification otp we just sent you on your email address
                </Text>
                <HStack space={2} justifyContent="center" mt={5}>
                    {code.map((digit, index) => (
                        <Box
                            key={index}
                            w={10}
                            h={12}
                            borderWidth={1}
                            borderColor="gray.300"
                            borderRadius="md"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <TextInput
                                style={styles.codeText}
                                value={digit}
                                onChangeText={(text) => handleCodeChange(text, index)}
                                maxLength={1}
                                keyboardType="numeric"
                            />
                        </Box>
                    ))}
                </HStack>
                <TouchableOpacity onPress={handleResend}>
                    <Text style={styles.resendText}>
                        Did not receive a otp? <Text style={styles.resendLink}>Resend.</Text>
                    </Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <AppButton title="Verify" onPress={handleVerify} />
                </View>
            </Box>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    sub_container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.white,
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
        textAlign: 'center',
        color: "#000"
    },
    resendText: {
        marginTop: 20,
        color: '#666',
        textAlign: 'center'
    },
    resendLink: {
        color: Colors.primary,
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        paddingLeft: 30,
    },
});

export default VerifyCode;