/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Text, VStack, Heading, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../Common/AppHeader';

const SDNSolution = () => {
    const navigation = useNavigation();

    const description = `
        Revolutionize your network infrastructure with WeRoute's cutting-edge Software-Defined Networking (SDN) solutions. We empower businesses with programmable, dynamic, and efficient network architectures that enhance agility, performance, and security. Our expert team delivers innovative SDN implementations that transform how you manage and optimize your network resources.
    `;

    const expertiseDescription = `
        Our SDN team brings extensive experience in designing and implementing advanced software-defined network architectures. Our expertise includes:
    `;

    const expertiseList = [
        'Network Virtualization - Creating abstracted network overlays for flexibility',
        'SDN Controllers - Implementing centralized network intelligence and control',
        'Programmable Networks - Enabling dynamic network configuration and management',
        'Network Function Virtualization (NFV) - Virtualizing network services for increased agility',
        'SD-WAN - Optimizing wide area network connectivity and performance',
        'Intent-Based Networking - Automating network provisioning based on business intent',
        'Network Slicing - Creating multiple virtual networks on a shared physical infrastructure',
        'OpenFlow and Other SDN Protocols - Leveraging open standards for interoperability',
    ];

    const servicesDescription = `
        We offer comprehensive SDN solutions tailored to your business needs:
    `;

    const servicesOffered = [
        {
            title: 'SDN Architecture Design',
            description: 'Custom SDN architectures aligned with your business objectives and network requirements',
        },
        {
            title: 'SDN Implementation',
            description: 'End-to-end deployment of SDN solutions, including controllers, switches, and management tools',
        },
        {
            title: 'Network Virtualization',
            description: 'Creating flexible network overlays for improved resource utilization and isolation',
        },
        {
            title: 'SD-WAN Deployment',
            description: 'Optimizing branch connectivity and application performance across distributed networks',
        },
        {
            title: 'SDN Security Integration',
            description: 'Implementing advanced security measures leveraging SDN capabilities',
        },
        {
            title: 'SDN Performance Optimization',
            description: 'Fine-tuning SDN implementations for maximum efficiency and responsiveness',
        },
    ];

    return (
        <View flex={1}>
            <AppHeader navigation={navigation} title="SDN Solutions" />
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
                                    Software-Defined Networking Solutions
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

export default SDNSolution;