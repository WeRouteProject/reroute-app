/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, Alert } from 'react-native';
import { Box, Text, Image, VStack, HStack, Button } from 'native-base';
import Logo from '../../Common/Utils/assets/images/short.png';
import AppHeader from '../../Common/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Common/Utils/Constants';

const About = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

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
        <Box>
            <AppHeader title='About Us' navigation={navigation} showBack />


            <ScrollView contentContainerStyle={styles.container}>

                {/* Box component to contain the logo */}
                <Box alignItems="center" style={styles.logoContainer}>
                    <Image
                        source={Logo}
                        style={[styles.logo, { height: height * 0.35 }]}
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
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white, // Elegant light background
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    scrollContent: {
        flexGrow: 1,
        padding: 16,
    },
    mainContainer: {
        backgroundColor: '#F0F8FF',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
    },
    aboutImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    learnMoreButton: {
        backgroundColor: '#4a69bd',
        borderRadius: 30,
        paddingVertical: 12,
    },
    sectionContainer: {
        backgroundColor: '#F0F8FF',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
    },
    visionMissionBox: {
        flex: 1,
        backgroundColor: '#f7f9fc',
        borderRadius: 15,
        padding: 20,
        borderWidth: 1,
        borderColor: '#e1e8ed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoBox: {
        backgroundColor: '#f7f9fc',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#e1e8ed',
    },
});

export default About;
