/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from './Constants';

export const GradientButton = ({ onPress, children }) => (
    <Button
        onPress={onPress}
        style={styles.learnMoreButton}
        p={0}
        overflow="hidden">
        <LinearGradient
            colors={['#1E3B70', '#29539B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 12,

            }}>
            {children}
        </LinearGradient>
    </Button>
);

const styles = StyleSheet.create({
    learnMoreButton: {
        backgroundColor: '#4a69bd',
        borderRadius: 30,
        paddingVertical: 12,
    },
});

