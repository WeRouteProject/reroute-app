/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, Alert } from 'react-native';
import { Box, Text, Image, VStack, HStack, Button } from 'native-base';
import Logo from '../../Common/Utils/assets/images/light.png';

const About = () => {
    const { height } = useWindowDimensions();

    const handleContactUsPress = () => {
        Alert.alert(
            'Contact Us',
            'Thank you for your interest! You can reach us at contact@company.com.'
        );
    };

    const handleLearnMorePress = () => {
        Alert.alert(
            'Learn More',
            'To learn more about our services, please visit our website or contact us directly.'
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Box component to contain the logo */}
            <Box alignItems="center" style={styles.logoContainer}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.45 }]}
                    resizeMode="contain"
                    alt="image not found"
                />
            </Box>
            {/* VStack to contain the About Us content */}
            <VStack space={4} px={4}>
                <Text fontSize="2xl" bold>
                    About Us
                </Text>
                <Text fontSize="md">
                    Welcome to our company! We are committed to providing the best services to our customers. Our mission is to deliver high-quality products that bring value to your life. We believe in innovation, excellence, and customer satisfaction.
                </Text>
                <Text fontSize="md">
                    Our team is made up of talented professionals who are passionate about what they do. We work together to ensure that our customers have the best experience possible.
                </Text>
                {/* HStack to contain the buttons */}
                <HStack space={2} justifyContent="center" mt={4}>
                    <Button onPress={handleContactUsPress}>Contact Us</Button>
                    <Button onPress={handleLearnMorePress}>Learn More</Button>
                </HStack>
            </VStack>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    // Style for the Box component containing the logo
    logoContainer: {
        marginBottom: 0, // Adjust the margin bottom to remove the white space
    },
    logo: {
        width: '100%',
        maxWidth: 200,
        maxHeight: 200,
        alignItems: 'center',
    },
});

export default About;
