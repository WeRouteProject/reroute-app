/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Text, VStack, Heading, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../Common/AppHeader';

const AutomationSolution = () => {
    const navigation = useNavigation();

    const description = `
        Streamline your operations with WeRoute's cutting-edge automation solutions. In today's fast-paced business environment, automation is key to maintaining competitive advantage. Our expert team implements intelligent automation solutions that optimize workflows, reduce operational costs, and enhance productivity across your organization.
    `;

    const expertiseDescription = `
        Our automation specialists combine deep technical expertise with industry best practices to deliver transformative solutions. Our comprehensive expertise includes:
    `;

    const expertiseList = [
        'RPA Implementation - Robotic Process Automation for repetitive task automation',
        'Workflow Automation - Streamlined business processes with intelligent workflows',
        'AI/ML Integration - Smart automation solutions powered by artificial intelligence',
        'Business Process Automation - End-to-end automation of complex business operations',
        'Test Automation - Comprehensive automated testing solutions for quality assurance',
        'Infrastructure Automation - Automated deployment and management of IT infrastructure',
        'DevOps Automation - Continuous integration and deployment automation',
        'Monitoring Automation - Automated system monitoring and alert management',
    ];

    const servicesDescription = `
        We offer comprehensive automation solutions tailored to meet diverse business needs:
    `;

    const servicesOffered = [
        {
            title: 'Process Automation',
            description: 'End-to-end automation of business processes and workflows',
        },
        {
            title: 'Intelligent RPA',
            description: 'AI-powered robotic process automation for complex tasks',
        },
        {
            title: 'DevOps Solutions',
            description: 'Automated development and deployment pipelines',
        },
        {
            title: 'Quality Automation',
            description: 'Comprehensive test automation and quality assurance solutions',
        },
        {
            title: 'Infrastructure Automation',
            description: 'Automated cloud and infrastructure management solutions',
        },
        {
            title: 'Monitoring Solutions',
            description: 'Automated monitoring and maintenance systems',
        },
    ];

    return (
        <View flex={1}>
            <AppHeader navigation={navigation} title="Automation" />
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
                                    Intelligent Automation
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

export default AutomationSolution;