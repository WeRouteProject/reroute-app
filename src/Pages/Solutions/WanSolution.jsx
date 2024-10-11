/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Text, VStack, Heading, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../Common/AppHeader';

const WanSolution = () => {
    const navigation = useNavigation();

    const description = `
        Empower your business with WeRoute's advanced Wide Area Network (WAN) solutions. In today's interconnected world, reliable and secure network connectivity is crucial for business success. Our expert team designs and implements cutting-edge WAN infrastructures that ensure seamless communication, enhanced productivity, and robust security across all your business locations.
    `;

    const expertiseDescription = `
        Our team of certified network engineers combines deep technical knowledge with years of practical experience to deliver superior WAN solutions. Our comprehensive expertise includes:
    `;

    const expertiseList = [
        'SD-WAN Implementation - Next-generation network architecture for optimal performance and control',
        'MPLS Network Design - Reliable and secure private network solutions for mission-critical applications',
        'Network Security Solutions - Advanced threat protection and secure access service edge (SASE)',
        'Bandwidth Optimization - Traffic shaping and QoS implementation for maximum efficiency',
        'Cloud Connectivity - Direct and secure connections to major cloud service providers',
        'Network Monitoring - 24/7 proactive monitoring and management of WAN infrastructure',
        'Disaster Recovery - Robust backup solutions and business continuity planning',
        'Global Network Integration - Seamless connectivity across international locations',
    ];

    const servicesDescription = `
        We offer a comprehensive suite of WAN solutions tailored to meet diverse business networking needs:
    `;

    const servicesOffered = [
        {
            title: 'SD-WAN Solutions',
            description: 'Intelligent network routing and optimization for enhanced performance and reliability',
        },
        {
            title: 'Hybrid WAN Architecture',
            description: 'Integrated solutions combining MPLS, internet, and cellular connections for redundancy',
        },
        {
            title: 'Global Connectivity',
            description: 'Worldwide network solutions with local access and centralized management',
        },
        {
            title: 'Security Services',
            description: 'Comprehensive network security with firewall, encryption, and threat prevention',
        },
        {
            title: 'Cloud Network Integration',
            description: 'Optimized connectivity to cloud platforms with dedicated private connections',
        },
        {
            title: 'Managed WAN Services',
            description: 'Full-service network management and monitoring for peace of mind',
        },
    ];

    return (
        <View flex={1}>
            <AppHeader navigation={navigation} title="WAN Solutions" />
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
                                    Enterprise WAN Solutions
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

export default WanSolution;