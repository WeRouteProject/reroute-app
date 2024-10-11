/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Text, VStack, Heading, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../Common/AppHeader';

const MobileDev = () => {
    const navigation = useNavigation();

    const description = `
        Transform your mobile presence with WeRoute's comprehensive mobile development solutions. We create powerful, user-friendly applications for both iOS and Android platforms that engage users and drive business growth. Our expert team delivers innovative mobile solutions that combine stunning design with robust functionality.
    `;

    const expertiseDescription = `
        Our mobile development team brings extensive experience in creating world-class applications for all major platforms. Our expertise includes:
    `;

    const expertiseList = [
        'Native iOS Development - Swift and Objective-C applications with modern UI/UX',
        'Native Android Development - Kotlin and Java applications with Material Design',
        'Cross-Platform Solutions - React Native and Flutter for multi-platform deployment',
        'Mobile UI/UX Design - Intuitive and engaging user interfaces',
        'App Security - Advanced security measures and data protection',
        'Integration Services - Third-party APIs and backend system integration',
        'Performance Optimization - Fast, responsive, and efficient applications',
        'App Store Management - Publishing and maintenance across all platforms',
    ];

    const servicesDescription = `
        We offer comprehensive mobile development services tailored to your business needs:
    `;

    const servicesOffered = [
        {
            title: 'iOS Development',
            description: 'Custom iPhone and iPad applications with cutting-edge features',
        },
        {
            title: 'Android Development',
            description: 'Feature-rich Android applications for all device types',
        },
        {
            title: 'Cross-Platform Apps',
            description: 'Efficient multi-platform solutions with shared codebase',
        },
        {
            title: 'Enterprise Solutions',
            description: 'Secure and scalable enterprise mobile applications',
        },
        {
            title: 'App Modernization',
            description: 'Legacy app upgrades with modern features and design',
        },
        {
            title: 'Mobile Commerce',
            description: 'Full-featured m-commerce solutions with secure payments',
        },
    ];

    return (
        <View flex={1}>
            <AppHeader navigation={navigation} title="Mobile Development" />
            <ScrollView flex={1}>
                <LinearGradient
                    colors={['#1E3B70', '#29539B']}
                    style={{ flex: 1, width: '100%' }}
                >
                    <Box flex={1} width="100%" px={6} py={6}>
                        <VStack space={8} alignItems="stretch">
                            <Box>
                                <Heading
                                    size="xl"
                                    color="white"
                                    mb={4}
                                    fontWeight="bold"
                                    letterSpacing="0.5px"
                                    maxWidth="95%"
                                >
                                    Mobile App Solutions
                                </Heading>
                                <Text
                                    fontSize="md"
                                    color="coolGray.100"
                                    lineHeight="lg"
                                >
                                    {description.trim()}
                                </Text>
                            </Box>

                            <Box>
                                <Heading
                                    size="lg"
                                    color="white"
                                    mb={4}
                                    fontWeight="semibold"
                                    maxWidth="95%"
                                >
                                    Our Expertise
                                </Heading>
                                <Text
                                    fontSize="md"
                                    color="coolGray.100"
                                    lineHeight="lg"
                                    mb={4}
                                >
                                    {expertiseDescription.trim()}
                                </Text>
                                <VStack space={3}>
                                    {expertiseList.map((item, index) => (
                                        <Box key={index} flexDirection="row" alignItems="flex-start">
                                            <Text
                                                fontSize="md"
                                                color="coolGray.100"
                                                lineHeight="lg"
                                                width="20px"
                                            >
                                                •
                                            </Text>
                                            <Text
                                                fontSize="md"
                                                color="coolGray.100"
                                                lineHeight="lg"
                                                flex={1}
                                            >
                                                {item}
                                            </Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </Box>

                            <Box>
                                <Heading
                                    size="lg"
                                    color="white"
                                    mb={4}
                                    fontWeight="semibold"
                                    maxWidth="95%"
                                >
                                    Services We Offer
                                </Heading>
                                <Text
                                    fontSize="md"
                                    color="coolGray.100"
                                    lineHeight="lg"
                                    mb={4}
                                >
                                    {servicesDescription.trim()}
                                </Text>
                                <VStack space={6}>
                                    {servicesOffered.map((service, index) => (
                                        <Box key={index}>
                                            <Text
                                                fontSize="lg"
                                                color="white"
                                                fontWeight="bold"
                                                mb={2}
                                            >
                                                {service.title}
                                            </Text>
                                            <Text
                                                fontSize="md"
                                                color="coolGray.100"
                                                lineHeight="lg"
                                            >
                                                {service.description}
                                            </Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </Box>
                        </VStack>
                    </Box>
                </LinearGradient>
            </ScrollView>
        </View>
    );
};

export default MobileDev;