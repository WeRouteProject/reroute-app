/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react';
import { Box } from 'native-base';

export default function AppFooter({ children }) {
    return (
        <Box bgColor={'white'} mt={150} p={2}>
            {children}
        </Box>
    )
}
