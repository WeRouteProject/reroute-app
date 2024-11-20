/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import { Box, Text, VStack, HStack, Modal, Pressable } from 'native-base';
import { Colors } from '../../Common/Utils/Constants';
import AppHeader from '../../Common/AppHeader';
import LinearGradient from 'react-native-linear-gradient';
import { GradientButton } from '../../Common/GradientButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const About = ({ navigation }) => {

    const [showLearnMore, setShowLearnMore] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleCall = () => {
        Linking.openURL('tel:+91 7977276432');
    };

    const handleEmail = () => {
        Linking.openURL('mailto:kp@weroute.ai');
    };

    const handleWebsite = () => {
        Linking.openURL('https://weroute.ai/');
    };

    const LearnMoreModal = () => (
        <Modal isOpen={showLearnMore} onClose={() => setShowLearnMore(false)} size="lg">
            <Modal.Content>
                <Modal.CloseButton size={8} />
                <Modal.Header>
                    <Text color={Colors.heading} bold fontSize="lg">
                        Learn More About Weroute
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <VStack space={4}>
                        <Box>
                            <Text bold fontSize="md" color={Colors.heading} mb={2}>
                                Our Expertise
                            </Text>
                            <VStack space={2}>
                                <HStack space={2} alignItems="center">
                                    <Icon name="check-circle" size={20} color={Colors.success} />
                                    <Text>Software Development</Text>
                                </HStack>
                                <HStack space={2} alignItems="center">
                                    <Icon name="check-circle" size={20} color={Colors.success} />
                                    <Text>Network Solutions</Text>
                                </HStack>
                                <HStack space={2} alignItems="center">
                                    <Icon name="check-circle" size={20} color={Colors.success} />
                                    <Text>Cloud Services</Text>
                                </HStack>
                                <HStack space={2} alignItems="center">
                                    <Icon name="check-circle" size={20} color={Colors.success} />
                                    <Text>Cybersecurity</Text>
                                </HStack>
                            </VStack>
                        </Box>

                        <Box>
                            <Text bold fontSize="md" color={Colors.heading} mb={2}>
                                Why Choose Us?
                            </Text>
                            <VStack space={2}>
                                <Text>• 14+ years of industry experience</Text>
                                <Text>• Certified expert engineers</Text>
                                <Text>• Comprehensive IT solutions</Text>
                                <Text>• 24/7 support availability</Text>
                            </VStack>
                        </Box>

                        <Pressable onPress={handleWebsite}>
                            <HStack space={2} alignItems="center" justifyContent="center">
                                <Icon name="web" size={20} color={Colors.heading} />
                                <Text color={Colors.heading} bold>
                                    Visit our website
                                </Text>
                            </HStack>
                        </Pressable>
                    </VStack>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );

    const ContactModal = () => (
        <Modal isOpen={showContact} onClose={() => setShowContact(false)} size="lg">
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>
                    <Text color={Colors.heading} bold fontSize="lg">
                        Contact Us
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <VStack space={6}>
                        <Pressable onPress={handleCall}>
                            <HStack space={4} alignItems="center">
                                <Box
                                    bg={Colors.heading}
                                    p={3}
                                    borderRadius="full"
                                >
                                    <FontAwesome name="phone" size={20} color="white" />
                                </Box>
                                <VStack>
                                    <Text bold>Call Us</Text>
                                    <Text color="gray.500">+91 7977276432</Text>
                                </VStack>
                            </HStack>
                        </Pressable>

                        <Pressable onPress={handleEmail}>
                            <HStack space={4} alignItems="center">
                                <Box
                                    bg={Colors.heading}
                                    p={3}
                                    borderRadius="full"
                                >
                                    <FontAwesome name="envelope" size={18} color="white" />
                                </Box>
                                <VStack>
                                    <Text bold>Email Us</Text>
                                    <Text color="gray.500">kp@weroute.com</Text>
                                </VStack>
                            </HStack>
                        </Pressable>

                        <Pressable onPress={handleWebsite}>
                            <HStack space={4} alignItems="center">
                                <Box
                                    bg={Colors.heading}
                                    p={3}
                                    borderRadius="full"
                                >
                                    <FontAwesome name="globe" size={20} color="white" />
                                </Box>
                                <VStack>
                                    <Text bold>Visit Website</Text>
                                    <Text color="gray.500">www.weroute.ai</Text>
                                </VStack>
                            </HStack>
                        </Pressable>

                        <Box bg="gray.100" p={4} borderRadius="md">
                            <Text bold mb={2}>Office Hours</Text>
                            <Text>Monday - Friday: 9:00 AM - 6:00 PM</Text>
                            <Text>Saturday: 9:00 AM - 1:00 PM</Text>
                            <Text>Sunday: Closed</Text>
                        </Box>
                    </VStack>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );

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

                <Box mb={5}>
                    <HStack justifyContent="center" space={4} marginBottom={10}>
                        <GradientButton onPress={() => setShowLearnMore(true)}>
                            <HStack space={2} alignItems="center">
                                <Icon name="information" size={20} color="white" />
                                <Text color="white" bold>Learn more</Text>
                            </HStack>
                        </GradientButton>
                        <GradientButton onPress={() => setShowContact(true)}>
                            <HStack space={2} alignItems="center">
                                <Icon name="phone-message" size={20} color="white" />
                                <Text color="white" bold>Contact us</Text>
                            </HStack>
                        </GradientButton>
                    </HStack>
                </Box>

            </ScrollView>

            <LearnMoreModal />
            <ContactModal />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        mb: 12,
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
