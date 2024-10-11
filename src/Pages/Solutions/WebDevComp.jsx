/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Text, VStack, Heading, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../Common/AppHeader';

const WebDevComp = () => {
    const navigation = useNavigation();

    const description = `
        Transform your digital presence with WeRoute's cutting-edge web development solutions. In an era where your website serves as your digital storefront, we deliver custom web experiences that drive results. Our expert team combines innovative design with powerful functionality to create websites that not only capture attention but also convert visitors into customers.
    `;

    const expertiseDescription = `
        Leveraging the latest technologies and industry best practices, our seasoned developers create scalable, secure, and high-performance web solutions. Our comprehensive expertise includes:
    `;

    const expertiseList = [
        'Custom Web Application Development - Tailored solutions that perfectly match your business needs',
        'Modern Frontend Development - Using React, Vue.js, and Angular for dynamic user interfaces',
        'Robust Backend Systems - Scalable architectures with Node.js, Python, and PHP',
        'Advanced E-commerce Solutions - Feature-rich platforms with secure payment integration',
        'Progressive Web Apps (PWA) - Mobile-first applications with offline capabilities',
        'API Development & Integration - RESTful and GraphQL APIs for seamless connectivity',
        'Performance Optimization - Lightning-fast loading times and optimal user experience',
        'Security Implementation - Protected solutions with latest security protocols',
    ];

    const servicesDescription = `
        We specialize in creating various types of web solutions, each meticulously crafted to serve specific business objectives:
    `;

    const servicesOffered = [
        {
            title: 'Enterprise Solutions',
            description: 'Scalable, secure, and feature-rich platforms for large organizations',
        },
        {
            title: 'E-commerce Platforms',
            description: 'Full-featured online stores with advanced inventory and payment systems',
        },
        {
            title: 'SaaS Applications',
            description: 'Cloud-based software solutions with subscription management',
        },
        {
            title: 'Customer Portals',
            description: 'Secure, user-friendly interfaces for client interaction and service delivery',
        },
        {
            title: 'Content Management Systems',
            description: 'Easy-to-manage platforms for dynamic content updates',
        },
        {
            title: 'Educational Platforms',
            description: 'Interactive learning environments with progress tracking',
        },
    ];

    return (
        <View flex={1}>
            <AppHeader navigation={navigation} title="Web Development Solutions" />
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
                                >
                                    Transform Your Digital Presence
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
                                >
                                    Technical Expertise
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
                                >
                                    Our Services
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

export default WebDevComp;