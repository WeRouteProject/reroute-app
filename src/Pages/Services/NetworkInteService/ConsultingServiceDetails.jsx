/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Box, VStack, Heading, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../../Common/AppHeader';
import { Colors } from '../../../Common/Utils/Constants';

const ConsultingServiceDetails = () => {
    const navigation = useNavigation();

    const introContent = 'At NGN, we specialize in IT and consulting services that empower businesses to optimize their technology investments. Our expert team provides strategic guidance, innovative solutions, and efficient resource management to drive growth and digital transformation.';

    const serviceHighlights = [
        {
            title: 'Tailored IT Strategies',
            description: 'Customized technology solutions aligned with your business goals.',
        },
        {
            title: 'Process Optimization',
            description: 'Streamlining operations for improved efficiency and productivity.',
        },
        {
            title: 'Data-Driven Insights',
            description: 'Utilizing analytics to make informed business decisions.',
        },
        {
            title: 'Technology Implementation',
            description: 'Seamless integration of new technologies into your existing infrastructure.',
        },
    ];

    const benefitsContent = [
        'Maximized ROI on technology investments',
        'Enhanced operational efficiency',
        'Informed decision-making with data analytics',
        'Access to industry best practices and expertise',
        'Scalable solutions that adapt to your needs',
    ];

    const approachContent = 'We adopt a collaborative approach, working closely with you to understand your unique challenges and goals. Our consulting services are designed to align technology with your business strategy, fostering innovation and driving success.';

    return (
        <>
            <AppHeader navigation={navigation} title="IT & Consulting Services" />
            <ScrollView>
                <LinearGradient colors={['#1E3B70', '#29539B']} style={{ flex: 1 }}>
                    <VStack space={8} alignItems="stretch" px={5} py={6}>
                        <Box>
                            <Heading size="xl" color="white" mb={4}>
                                Transforming Your Business with Strategic IT Consulting
                            </Heading>
                            <Text fontSize={16} color={Colors.lightGray} lineHeight={24}>
                                {introContent}
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="lg" color="white" mb={4}>
                                Our Service Highlights
                            </Heading>
                            <VStack space={4}>
                                {serviceHighlights.map((highlight, index) => (
                                    <Box key={index}>
                                        <Heading size="md" color="white" mb={2}>
                                            {highlight.title}
                                        </Heading>
                                        <Text fontSize={16} color={Colors.lightGray} lineHeight={24}>
                                            {highlight.description}
                                        </Text>
                                    </Box>
                                ))}
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="lg" color="white" mb={4}>
                                Benefits of Our IT & Consulting Services
                            </Heading>
                            <VStack space={2}>
                                {benefitsContent.map((benefit, index) => (
                                    <Box key={index} flexDirection="row">
                                        <Text fontSize={16} color={Colors.lightGray} mr={2}>•</Text>
                                        <Text fontSize={16} color={Colors.lightGray} lineHeight={24}>
                                            {benefit}
                                        </Text>
                                    </Box>
                                ))}
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="lg" color="white" mb={4}>
                                Our Approach
                            </Heading>
                            <Text fontSize={16} color={Colors.lightGray} lineHeight={24}>
                                {approachContent}
                            </Text>
                        </Box>
                    </VStack>
                </LinearGradient>
            </ScrollView>
        </>
    );
};

export default ConsultingServiceDetails;
