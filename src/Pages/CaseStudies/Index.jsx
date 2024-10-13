/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ScrollView, Animated } from 'react-native';
import { Box, Text, VStack, HStack, Icon, Pressable, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../../Common/AppHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CaseStudy = ({ title, industry, location, challenge, solution, keyComponents, results }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <Pressable onPress={toggleExpand}>
            {({ isPressed }) => (
                // <Animated.View style={{
                //     transform: [{ scale: isPressed ? 0.98 : 1 }],
                //     opacity: isPressed ? 0.8 : 1,
                // }}>
                <Box
                    bg="white"
                    p={6}
                    rounded="xl"
                    borderWidth={1}
                    borderColor="coolGray.200"
                    shadow={3}
                    mb={4}
                >
                    <VStack space={3}>
                        <Text fontSize="xl" fontWeight="bold" color="#1E3B70">
                            {title}
                        </Text>
                        <HStack space={2} alignItems="center">
                            <Icon as={Ionicons} name="business" color="#29539B" size="sm" />
                            <Text fontSize="sm" color="coolGray.600">{industry}</Text>
                        </HStack>
                        <HStack space={2} alignItems="center">
                            <Icon as={Ionicons} name="location" color="#29539B" size="sm" />
                            <Text fontSize="sm" color="coolGray.600">{location}</Text>
                        </HStack>
                        <Text fontSize="sm" fontWeight="medium" color="#1E3B70" mt={2}>
                            Challenge:
                        </Text>
                        <Text fontSize="sm" color="coolGray.600" numberOfLines={expanded ? 0 : 2}>
                            {challenge}
                        </Text>

                        {expanded && (
                            <>
                                <Text fontSize="sm" fontWeight="medium" color="#1E3B70" mt={2}>
                                    Solution:
                                </Text>
                                <Text fontSize="sm" color="coolGray.600">
                                    {solution}
                                </Text>

                                <Text fontSize="sm" fontWeight="medium" color="#1E3B70" mt={2}>
                                    Key Components:
                                </Text>
                                {keyComponents.map((component, index) => (
                                    <Text key={index} fontSize="sm" color="coolGray.600">• {component}</Text>
                                ))}

                                <Text fontSize="sm" fontWeight="medium" color="#1E3B70" mt={2}>
                                    Results:
                                </Text>
                                {results.map((result, index) => (
                                    <Text key={index} fontSize="sm" color="coolGray.600">• {result}</Text>
                                ))}
                            </>
                        )}

                        <Button
                            onPress={toggleExpand}
                            variant="ghost"
                            _text={{ color: '#29539B' }}
                            leftIcon={<Icon as={MaterialIcons} name={expanded ? 'arrow-drop-up' : 'arrow-drop-down'} size="md" />}
                        >
                            {expanded ? 'Show Less' : 'Read More'}
                        </Button>
                    </VStack>
                </Box>
            )}
        </Pressable>
    );
};

const CaseStudies = ({ navigation }) => {
    const caseStudies = [
        {
            title: 'Network Monitoring Automation with Ansible AVD Library',
            industry: 'Telecommunications',
            location: 'Middle East',
            challenge: 'The client faced inefficiencies in manually monitoring their large network infrastructure, which resulted in delays and human errors.',
            solution: 'We implemented an automation solution using the Ansible AVD Library to streamline network monitoring and minimize manual intervention.',
            keyComponents: [
                'Ansible AVD Library',
                'Network monitoring scripts',
                'Automation framework',
            ],
            results: [
                '40% reduction in time spent on network monitoring',
                'Improved network performance',
                'Reduced human error by automating processes',
            ],
        },
        {
            title: 'Cross-Platform Mobile Banking Application',
            industry: 'Financial Services',
            location: 'Europe',
            challenge: 'A multinational bank needed to replace multiple legacy mobile apps with a single, feature-rich application that worked across iOS and Android platforms.',
            solution: 'Developed a unified mobile banking application using React Native, supported by Node.js backend services.',
            keyComponents: [
                'React Native for cross-platform mobile development',
                'Node.js backend services',
                'Redux for state management',
                'SSO authentication integration',
            ],
            results: [
                '70% code reuse between iOS and Android platforms',
                '35% reduction in app development and maintenance costs',
                '25% increase in mobile banking user engagement',
            ],
        },
        {
            title: 'Microservices-Based E-commerce Platform Overhaul',
            industry: 'Retail',
            location: 'United States',
            challenge: 'A large retailer`s monolithic e-commerce platform struggled with scalability issues during peak shopping seasons and was difficult to update.',
            solution: 'Redesigned the platform using Spring Boot microservices architecture, with a React.js frontend for improved performance and user experience.',
            keyComponents: [
                'Spring Boot microservices',
                'React.js frontend',
                'Docker containerization',
                'Kubernetes for orchestration',
                'API Gateway for request routing',
            ],
            results: [
                '99.99% uptime during Black Friday sales (up from 97%)',
                '40% faster page load times',
                '50% reduction in deployment time for new features',
            ],
        },
        {
            title: 'Automated Software Testing Pipeline',
            industry: 'Software Development',
            location: 'India',
            challenge: 'A software development company struggled with long release cycles and frequent bugs due to manual testing processes.',
            solution: 'Implemented an automated testing pipeline integrated with the CI/CD process.',
            keyComponents: [
                'Selenium for web application testing',
                'JUnit for unit testing',
                'Jenkins for CI/CD pipeline orchestration',
                'Docker containers for consistent test environments',
                'ELK stack for test result analytics',
            ],
            results: [
                '80% reduction in manual testing effort',
                '50% faster time-to-market for new features',
                '60% decrease in post-release defects',
                '90% increase in test coverage',
            ],
        },
        {
            title: 'Datacenter Refresh',
            industry: 'IT Solutions',
            location: 'Australia',
            challenge: 'The client needed a data center infrastructure refresh to support growing demands and improve network performance.',
            solution: 'We replaced switch hardware, upgraded EOS, and migrated CVX to EVPN, enhancing data center performance and scalability.',
            keyComponents: [
                'Switch hardware replacement',
                'EOS upgrade',
                'CVX to EVPN migration',
            ],
            results: [
                '50% increase in data center performance',
                'Improved scalability and future-proofing',
                '30% reduction in downtime during the upgrade',
            ],
        },
    ];

    return (
        <Box flex={1}>
            <AppHeader
                navigation={navigation}
                title="Case Studies"
            />
            <LinearGradient
                colors={['#1E3B70', '#29539B']}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white" mb={6} textAlign={'center'}>
                        Our Success Stories
                    </Text>
                    <VStack space={4}>
                        {caseStudies.map((study, index) => (
                            <CaseStudy key={index} {...study} />
                        ))}
                    </VStack>
                </ScrollView>
            </LinearGradient>
        </Box>
    );
};

export default CaseStudies;
