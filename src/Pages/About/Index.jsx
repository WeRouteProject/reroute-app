/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Alert, View } from 'react-native';
import { Box, Text, VStack, HStack } from 'native-base';
import { Colors } from '../../Common/Utils/Constants';
import AppHeader from '../../Common/AppHeader';
import LinearGradient from 'react-native-linear-gradient';
import { GradientButton } from '../../Common/GradientButton';

const About = ({ navigation }) => {
    const handleLearnMorePress = () => {
        Alert.alert(
            'Learn More',
            'To learn more about our services, please visit our website or contact us directly.'
        );
    };

    return (
        <View style={styles.container}>
            <AppHeader
                navigation={navigation}
                title="About Us"
            />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <LinearGradient
                    colors={['#1E3B70', '#29539B']} // Define your gradient colors here
                    style={styles.sectionContainer}
                >
                    <Box >
                        <VStack space={2} px={2} >
                            <Text fontSize="2xl" bold color={Colors.white} textAlign="center">
                                About Weroute
                            </Text>
                            <Box style={styles.infoBox}>
                                <Text fontSize="sm" color="#555" style={styles.textLeftAligned}>
                                    At Weroute, we view our clients as visionaries, recognizing each project as a potential game-changer. We offer comprehensive support that goes far beyond coding, combining our business-oriented mindset with tech expertise to ensure our clients excel in the competitive market through our products.
                                </Text>
                            </Box>
                            <Box style={styles.infoBox}>
                                <VStack space={3}>
                                    <Text fontSize="lg" bold color="#4a69bd" textAlign={'center'}>
                                        Our Vision
                                    </Text>
                                    <Text fontSize="sm" color="#555" style={styles.textLeftAligned}>
                                        To empower businesses through innovative IT solutions, ensuring optimal performance, security, and growth. We are committed to delivering exceptional service, fostering long-term client relationships, and driving technological advancements to meet the evolving needs of our clients.
                                    </Text>
                                </VStack>
                            </Box>
                            <Box style={styles.infoBox}>
                                <VStack space={3}>
                                    <Text fontSize="lg" bold color="#4a69bd" textAlign={'center'}>
                                        Our Mission
                                    </Text>
                                    <Text fontSize="sm" color="#555" style={styles.textLeftAligned}>
                                        To be a global leader in IT consultancy, recognized for our commitment to excellence, innovation, and client satisfaction. We envision a future where our cutting-edge solutions drive transformative changes, enabling businesses to achieve their full potential in the digital age.
                                    </Text>
                                </VStack>
                            </Box>
                        </VStack>
                        <Text fontSize="2xl" bold color={Colors.white} textAlign="center" mb={4}>
                            Our Commitment
                        </Text>
                        {[
                            {
                                title: 'What We Stand For',
                                content: 'At Weroute, we are dedicated to delivering quality technology services and solutions, professional outsourcing and managed services, Software development and network services that provide true business value to our clients, enabling them to achieve their goals and initiatives.',
                            },
                            {
                                title: 'Who We Are',
                                content: 'We are certified expert engineers with over 14 years of experience, focusing on the digital transformation of businesses in both the software and networking domains. With prior experience in the enterprise, financial, healthcare, logistics, and service provider markets, we specialize in developing innovative products and services that ensure absolute business growth.',
                            },
                            {
                                title: 'Software Development',
                                content: 'In the software development industry, Weroute is committed to delivering outstanding web development, mobile app development, APIs, data analytics, AI, and UI/UX solutions. We guide our clients throughout their journey to achieve sustainable business growth.',
                            },
                            {
                                title: 'Networking Expertise',
                                content: 'In the networking segment, we excel in implementing Greenfield and Brownfield data centers across regions, designing complex networks, multi-vendor integrations, audit and consultancy services, program management, and vendor management services. We provide top-notch network services and solutions, including professional services, network automation, designing, implementation, network/cyber security, SD-WAN solutions, data center deployment, migration, campus networking, wireless WiFi, LAN, POC, project management, cloud security, and technical manpower resources.',
                            },
                        ].map((item, index) => (
                            <Box key={index} style={styles.infoBox}>
                                <Text fontSize="lg" bold color="#4a69bd" mb={2} textAlign={'center'}>
                                    {item.title}
                                </Text>
                                <Text fontSize="sm" color="#555" style={styles.textLeftAligned}>
                                    {item.content}
                                </Text>
                            </Box>
                        ))}
                    </Box>
                </LinearGradient>

                <HStack justifyContent="center" space={4} marginBottom={10}>
                    <GradientButton onPress={handleLearnMorePress}>
                        <Text color="white" bold>Learn more</Text>
                    </GradientButton>
                    <GradientButton onPress={handleLearnMorePress}>
                        <Text color="white" bold>Contact us</Text>
                    </GradientButton>
                </HStack>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    scrollContent: {
        flexGrow: 1,
        padding: 16,
    },
    sectionContainer: {
        backgroundColor: '#E6E6FA',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
        marginBottom: 20,
    },
    infoBox: {
        backgroundColor: '#f7f9fc',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: Colors.dark,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
    },
    textLeftAligned: {
        textAlign: 'left', // Align text to the left
    },
});

export default About;
