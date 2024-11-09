/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import AppCenterLayout from '../../Common/AppCenterLayout';
import AppInput from '../../Common/AppInput';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AppFooter from '../../Common/AppFooter';
import AppButton from '../../Common/AppButton';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

const ChangePasswordScreen = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const navigation = useNavigation();
    const route = useRoute();

    const token = route.params?.token;

    const handleChangePassword = async () => {

        if (!newPassword || !confirmNewPassword) {
            showMessage({
                message: 'Please fill all the fields correctly',
                type: 'danger',
            });
            return;
        }

        if (newPassword !== confirmNewPassword) {
            showMessage({
                message: 'New password and confirm password must be same',
                type: 'warning',
            });
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
                showMessage({
                    message: 'Password changed successfully',
                    type: 'success',
                });
                navigation.navigate('Login');
            } else {
                showMessage({
                    message: 'Failed to change the password, please check your internet connectivity and try again',
                    type: 'danger',
                });
            }
        } catch (error) {
            showMessage({
                message: 'Something went wrong, please check your internet connectivity and try again',
                type: 'danger',
            });
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
