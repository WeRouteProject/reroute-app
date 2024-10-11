/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Box, VStack, Heading, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../../Common/AppHeader';
import { Colors } from '../../../Common/Utils/Constants';

const NetworkServiceDetails = () => {
    const navigation = useNavigation();

    const introContent = 'At NGN, we take pride in our comprehensive Managed Services offerings. Our expert team ensures that your IT infrastructure runs smoothly, allowing you to focus on your core business objectives. With our proactive approach and cutting-edge solutions, we transform your IT from a cost center to a strategic asset.';

    const serviceHighlights = [
        {
            title: '24/7 Monitoring and Support',
            description: 'Round-the-clock vigilance and rapid response to any IT issues.',
        },
        {
            title: 'Proactive Maintenance',
            description: 'Regular updates, patches, and optimizations to prevent potential problems.',
        },
        {
            title: 'Security Management',
            description: 'Comprehensive security measures to protect your valuable data and systems.',
        },
        {
            title: 'Cloud Services Management',
            description: 'Expert oversight of your cloud infrastructure for optimal performance.',
        },
    ];

    const benefitsContent = [
        'Reduced operational costs',
        'Improved system reliability and uptime',
        'Enhanced security and compliance',
        'Access to expert IT knowledge and resources',
        'Scalable solutions that grow with your business',
    ];

    const approachContent = 'We believe in a partnership approach. Our team works closely with you to understand your unique business needs and tailor our services accordingly. We don\'t just manage your IT; we align it with your business goals to drive growth and innovation.';

    return (
        <>
            <AppHeader navigation={navigation} title="Managed Services" />
            <ScrollView>
                <LinearGradient colors={['#1E3B70', '#29539B']} style={{ flex: 1 }}>
                    <VStack space={8} alignItems="stretch" px={5} py={6}>
                        <Box>
                            <Heading size="xl" color="white" mb={4}>
                                Empowering Your Business with Expert IT Management
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
                                Benefits of Our Managed Services
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

export default NetworkServiceDetails