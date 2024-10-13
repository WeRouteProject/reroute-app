/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import { Alert, StyleSheet } from 'react-native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import AppInput from '../../Common/AppInput';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AppFooter from '../../Common/AppFooter';
import AppButton from '../../Common/AppButton';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const ChangePasswordScreen = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const navigation = useNavigation();
    const route = useRoute();

    // Fix token extraction
    const token = route.params?.token;

    const handleChangePassword = async () => {
        // Validate inputs
        if (!newPassword || !confirmNewPassword) {
            Alert.alert('Error', 'Please fill in both password fields.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        const apiUrl = 'https://backend-sec-weroute.onrender.com/backend_sec/User/update-pass';

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    password: newPassword,
                    confirmPassword: confirmNewPassword,
                    token,
                }),
            });

            const result = await response.json();
            console.log('Response Status:', response.status);
            console.log('Response Body:', result);

            if (response.ok) {
                Alert.alert('Success', 'Password changed successfully.');
                navigation.navigate('Login');
            } else {
                console.log('not-ok');
                Alert.alert('Error', result?.message || 'Failed to change the password');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    return (
        <AppCenterLayout>
            <Box backgroundColor={'white'} width={'100%'} h={'100%'} mt={20} p={30}>
                <Text style={styles.subtitle}>
                    Enter your new password to update your account
                </Text>
                <Box mt={10}>
                    <Text fontSize={FontSizes.small} color={Colors.gray} my={2}>New Password</Text>
                    <AppInput
                        placeholder="Enter New Password"
                        value={newPassword}
                        setValue={setNewPassword}
                        secureTextEntry={true}
                    />
                    <Text fontSize={FontSizes.small} color={Colors.gray} my={2}>Confirm Password</Text>
                    <AppInput
                        placeholder="Re-enter Your Password"
                        value={confirmNewPassword}
                        setValue={setConfirmNewPassword}
                        secureTextEntry={true}
                    />
                </Box>
                <AppFooter>
                    <Box>
                        <AppButton title="Change Password" mt={20} onPress={handleChangePassword} />
                    </Box>
                </AppFooter>
            </Box>
        </AppCenterLayout>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
});

export default ChangePasswordScreen;
