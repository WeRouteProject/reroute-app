/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Text, VStack, Heading, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../Common/AppHeader';

const CloudSolution = () => {
    const navigation = useNavigation();

    const description = `
        Elevate your business capabilities with WeRoute's comprehensive Cloud Solutions. We enable organizations to harness the power of cloud computing for enhanced scalability, flexibility, and efficiency. Our expert team delivers tailored cloud strategies and implementations that drive innovation and business growth across public, private, and hybrid cloud environments.
    `;

    const expertiseDescription = `
        Our Cloud Solutions team brings extensive experience in designing, implementing, and managing advanced cloud architectures. Our expertise includes:
    `;

    const expertiseList = [
        'Multi-Cloud Strategy - Optimizing workload distribution across multiple cloud platforms',
        'Cloud Migration - Seamless transition of applications and data to the cloud',
        'Cloud-Native Development - Building scalable applications using microservices and containers',
        'Serverless Computing - Leveraging event-driven, serverless architectures for increased efficiency',
        'Cloud Security - Implementing robust security measures for cloud environments',
        'DevOps Integration - Streamlining development and operations with cloud-native practices',
        'Cloud Cost Optimization - Managing and optimizing cloud spending',
        'Disaster Recovery and Business Continuity - Ensuring data protection and availability',
    ];

    const servicesDescription = `
        We offer comprehensive Cloud Solutions tailored to your business needs:
    `;

    const servicesOffered = [
        {
            title: 'Cloud Strategy Consulting',
            description: 'Developing tailored cloud adoption and migration strategies aligned with business goals',
        },
        {
            title: 'Cloud Migration Services',
            description: 'End-to-end migration of applications, data, and infrastructure to the cloud',
        },
        {
            title: 'Hybrid Cloud Implementation',
            description: 'Designing and deploying hybrid cloud solutions for optimal workload distribution',
        },
        {
            title: 'Cloud-Native Application Development',
            description: 'Building scalable, resilient applications leveraging cloud-native technologies',
        },
        {
            title: 'Cloud Security and Compliance',
            description: 'Implementing comprehensive security measures and ensuring regulatory compliance',
        },
        {
            title: 'Cloud Managed Services',
            description: 'Ongoing management, monitoring, and optimization of cloud environments',
        },
    ];

    return (
        <View flex={1}>
            <AppHeader navigation={navigation} title="Cloud Solutions" />
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
                                    Cloud Solutions
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

export default CloudSolution;